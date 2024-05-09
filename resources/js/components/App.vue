<template>
    <div class="container">
        <RouterLink :to="{name: 'fruits.index'}">Fruits</RouterLink>
        <RouterLink v-if="!accessToken" :to="{name: 'users.login'}">Login</RouterLink>
        <RouterLink v-if="!accessToken" :to="{name: 'users.registration'}">Registration</RouterLink>
        <RouterLink v-if="accessToken" :to="{name: 'users.personal'}">Personal</RouterLink>
        <a v-if="accessToken" @click.prevent="logout" href="#">Logout</a>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>

</style>

<script>

import api from "../api.js";

export default {
    name: 'App',

    data() {
        return {
            accessToken: null
        }
    },

    mounted() {
        this.getToken()
        window.addEventListener('storage', this.handleStorageChange);
    },


    methods: {
        getToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
        handleStorageChange(event) {
            if (event.key === 'access_token') {
                this.getToken();
            }
        },
        logout(){
            api.post('/api/auth/logout').then(
                () => {
                    localStorage.removeItem('access_token')
                    this.$router.go({name: 'users.login'})
                }
            )
        }
    },

}

</script>
