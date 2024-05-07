<template>
    <div class="container">
        <RouterLink :to="{name: 'fruits.index'}">Fruits</RouterLink>
        <RouterLink :to="{name: 'users.login'}">Login</RouterLink>
        <RouterLink :to="{name: 'users.registration'}">Registration</RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>

</style>

<script>

export default {
    name: 'App'
}

</script>
