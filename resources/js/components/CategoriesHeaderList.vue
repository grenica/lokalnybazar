<template>
<div class="cat">
        <ul>
            <li v-for="category in categories" :key="category.id" >
                <!-- <router-link class="strong store_link" :to="{ name:'category', params:{id:category.id} }">{{ category.name }}</router-link> -->
                <router-link class="strong store_link" :to="{ name:'category', params:{name:category.name} }">{{ category.name }}</router-link>
            </li>
        </ul>
</div>
</template>
<script>

export default {
    
    // data() {
    //     return {
    //         categories: null,
    //        // joke: 'Jasiek',
    //     }
    // },
    
    mounted() {
        // console.log('CREATED');
        this.$store.dispatch('fetchCategories');
    },
    
    computed: {
        categories() {
            return this.$store.state.categories;
        },
    }
}
</script>
