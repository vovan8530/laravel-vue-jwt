<script setup>

</script>

<template>
    <div class="w-25 ">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Confirm password</label>
            <input v-model="password_confirmation" type="password" class="form-control">
        </div>
        <div v-if="error" class="text-danger">{{error}}</div>
        <button type="submit" @click.prevent="storeUser()" class="btn btn-primary">Registration</button>
    </div>
</template>

<style scoped>

</style>

<script>

export default {
    name: 'Registration',

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    },

    methods: {
        storeUser(){
            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }).then(
                response => {
                    localStorage.setItem('access_token', response.data)
                    this.$router.go({name: 'users.personal'})
                }
            ).catch(
                error => {
                    console.log(error)
                    this.error = error.response.data.message
                }
            )
        }
    }
}

</script>
