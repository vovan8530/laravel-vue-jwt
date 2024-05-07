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
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input">
            <label  class="form-check-label">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>

</template>

<style scoped>

</style>

<script>

export default {
    name: 'Login'
}

</script>
