
<template>
    <div class="loginform1" v-bind:class="{active: active}">
        <!-- <form @submit.prevent="submitedform" id="loginform"> -->
        <div class="loginform" v-bind:class="{activeform: this.activeform === 1 }">
            <!-- <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p> -->
            <div><button class="close_custom" @click="closeform"></button></div>
            <label for="name">E-mail</label>
            <input type="text" name="email" id="name" v-model="user.email"/>
            <label for="password">Hasło</label>
            <input type="password" name="password" id="password" v-model="user.password" />
              <!-- <input type="submit" value="Submit" > -->
            <button @click="login" class="button_large">Loguj</button>
            <a href="/login">Loguj jako rolnik</a>
            <button @click="toggleform" class="button_large">Załóż konto</button>
        </div>
        <div class="registerform" v-bind:class="{activeform: this.activeform === 2 }">
            <div><button class="close_custom" @click="closeform"></button></div>
            <h3>Zarejestruj się !</h3>
            <!-- <form action="#" @submit.prevent="handleLogin"> -->
            <label for="name">Nazwa</label>
            <input type="text" name="name" id="name" v-model="user.name"/>
            <label for="email">E-mail</label>
            <input type="text" name="email" id="email" v-model="user.email"/>
            <label for="password">Hasło</label>
            
            <input type="password" name="password"  id="password" v-model="user.password" />
            <label for="password-confirm">Ponów hasło</label>
            <input id="password-confirm" type="password" name="password_confirmation" required v-model="user.password_confirmation"/>
            
            <button @click="register" class="button_large">Zarejestruj</button>
            <!-- <button type="submit" class="button_large">Zarejestruj</button> -->
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['active'],

    data() {
        return {
            user: {
                email: "",
                password: "",
                name: "",
                password_confirmation: "",
                typ:0,
            }, 
            zalogowany:null,
            // isActive: this.active,
            activeform: 1,
        }
    },
    methods: {
        // login: function() {
        //     axios.post('/api/login_store2',{
        //         email: this.email,
        //         password: this.password,
        //     })
        //     .then((response) =>{
        //        console.log(response.data.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
               
        //     });
        // },
        login() {
            //wywołuje akcje loginuser z store.js
            this.$store.dispatch('loginuser',this.user);
            // jak już zalogowany user
            if(this.$store.getters.isLoggedIn) {
               this.$emit('zamknij',false);
            }
        },
        closeform() {
            // przekazuje do rodzica zdarzenie
            this.$emit('zamknij',false);
            this.activeform =1;
        },
        toggleform() {
            if(this.activeform==1) { 
                this.activeform=2;
            }
            
        },
        // handleRegister() {
        //     axios.get('/sanctum/csrf-cookie').then(response => {
        //         //console.log(response);
        //         axios.post('/register',this.user ).then(response => {
        //             //console.log(response.data);
        //             this.$router.push({name: 'welcome'});
        //         });
        //     });
        // },
        // handleLogin() {
        //     axios.get('/sanctum/csrf-cookie').then(response => {
        //         //console.log(response);
        //         axios.post('/login',this.user ).then(response => {
        //             //console.log(response.data);
        //             this.$router.push({name: 'welcome'});
        //         });
        //     });
        // },
        register() {
            // console.log('resiter');
             axios.post('/api/register',this.user)
             .then((response) =>{
                 console.warn('wysłałem dane rejestracji do API');
                //  this.$router.push({name: 'login2'});
             });
        }
        
    }
    
}
</script>
<style lang="scss">
 .activeform {
     display: flex !important;
 }
</style>