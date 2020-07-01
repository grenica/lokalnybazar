<template>
    <div class="login_wrapper">
        <!-- <router-link class="store_link" v-if="!isLoggedIn" :to="{ name:'login2'}">
            <i class="icofont-user-alt-7"></i> <span>Loguj</span>
        </router-link> -->
        
        <button class="store_link" v-if="!isLoggedIn" @click="loginform">
            <i class="icofont-user-alt-7"></i> 
        Loguj</button>
        <a href="#" class="store_link" v-if="isLoggedIn" @click="logout">Wyloguj</a>
        <LoginForm :active="isactive" v-on:zamknij="zamknijokno($event)" />
    </div>
</template>
<script>
import LoginForm from '../views/LoginForm';

export default {
    data() {
        return {
            isactive: false,
        }
    },
    components: {
        LoginForm
    },

    computed: {
        currentUser() {
            return this.$store.state.user;
        },
        
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        logout() {
            //z store.js wywołuje logout
            this.$store.dispatch('logoutuser');
        },
        jakiUser() {
            let u =  this.$store.state.user;
            console.log(u);
        },
        loginform() {
        //    this.isactive = !this.isactive;
           this.isactive = true;
           console.log('loginform'+ this.isactive);
        },
        zamknijokno(bl) {
            this.isactive = bl;
            console.log('loginform'+ this.isactive);
        },
        isMobile() {
            if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
        },
    }
}
</script>