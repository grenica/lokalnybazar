<template>
    <div class="store_header">
        
        <Notification />
        <router-link :to="{name: 'welcome'}">Prosto ze wsi</router-link>
       <Search />
        <Login />
       <!-- <Categories /> -->
       <CardHeader />
       <CategoriesHeaderList />
       <MobileMenu />
        <!-- <a href="#" class="btn btn-primary" @click="testuj()">CLICK</a> -->
    </div>
   
</template>

<script>
import Notification from '../components/Notification';
import Search from '../components/Search.vue';
import Login from '../components/Login.vue';
import CardHeader from '../components/CardHeader.vue';
import MobileMenu from '../components/MobileMenu';
import CategoriesHeaderList from '../components/CategoriesHeaderList';
// import Logo from '../components/Logo.vue';


export default {
   components: {
       Notification,
       Search,
        Login,
        CardHeader,
        CategoriesHeaderList,
        MobileMenu,
    // Logo,
    // Categories,
        
   },

    
}
</script>