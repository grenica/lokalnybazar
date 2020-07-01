<template>
    
    <div class="app_wrapper">
       <Header />
        <router-view></router-view>
        <Footer />  

    </div>
   
</template>

<script>

import Vuex from 'vuex';
import axios from 'axios';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

export default {
    components: {
        Header,
        Footer
    },

    // mounted: function(){
    //     console.log('mouted w App');
    // },
    // created: function() {
    //     // console.log('created w App');
    //      this.$store.dispatch('fetchMarket');
    // }
    // created() {
    //     axios.defaults.headers.common["Authorization"] = "Bearer "+localStorage.getItem("token");
    //     this.$store.dispatch('getUser');
    // }

    // mounted: function() {
    //      this.$store.dispatch('fetchMarket');
    // },
    
}
</script>
