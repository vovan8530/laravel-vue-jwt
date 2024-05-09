<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <th scope="row">{{ fruit.id }}</th>
                <td>{{ fruit.title }}</td>
                <td>{{ fruit.price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>

<script>

import api from "../../api.js";

export default {
    name: 'IndexFruit',

    data() {
        return {
            fruits: null,
        }
    },

    mounted() {
        this.getFruits()
    },

    methods: {
        async getFruits() {
            return api.get('/api/fruits')
                .then(
                    response => {
                        this.fruits = response.data.data
                    }
                )
        },
    },


}

</script>
