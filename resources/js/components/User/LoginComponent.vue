<script setup>

</script>

<template>

    <div class="w-25 ">
        <div class="mb-3">
            <label class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input">
            <label  class="form-check-label">Check me out</label>
        </div>
        <button type="submit" @click="userLogin" class="btn btn-primary">Login</button>
    </div>

</template>

<style scoped>

</style>

<script>

export default {
    name: 'Login',

    data() {
        return{
            email: '',
            password: '',
        }
    },

    methods: {
        userLogin(){
            return axios.post('/api/auth/login', {
                email: this.email,
                password: this.password,
            }).then(
                response => {
                    localStorage.setItem('access_token', response.data.access_token)
                }
            )
        }
    }
}


</script>
