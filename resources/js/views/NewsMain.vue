<template>
    <div class="article-list">
        <div class="main_category_title">
            <h3>Nowości 
                <!-- <span class="badge badge-secondary">New</span> -->
                </h3>
            <router-link :to="{name: 'news'}">Wiecej nowości</router-link>
           
        </div>
        <!-- <div v-for="item in products" v-bind:key="item.id" class="item_pos">
            <CartItem :item="item" />
        </div> -->
        <CartItem :item="item" v-for="item in products" v-bind:key="item.id" />
    </div>
    
    
</template>
<script>

import CartItem from '../components/CartItem';
export default {
    data () {
        return {
        loading: false,
        m: null,
        
        }
    },
    components: {
        CartItem
    },
    // created() {
    //     // alert('Created'+this.$store.getters.getMarketID);
    //     this.m=this.$store.getters.getMarketID;
    // },
    
    mounted() {
    //     this.$data.m = this.$store.getters.getMarketID;
    //     alert("mounted "+a);
        this.$store.dispatch('fetchProductsNews');
    },
    computed: {
        
        products() {
            return this.$store.state.products;
        }
    },
   
    
}
</script>

<router-link :to="{ name:'product', params:{id:item.id}}" >
                <!-- <div v-for="img in item.images" v-bind:key="img.id">
                    <img v-if="img.isdefault" v-bind:src="'/storage/produkty/'+ img.image" />
                </div> -->
               <img class="card_img" v-bind:src="'/storage/produkty/'+ item.image+'.webp'" /> 
            </router-link>
            <p class="farmer">{{ item.FarmerName }}</p>
            <h2>{{ item.name }}</h2>
            <div class="price_block">
               <span class="strong">{{ item.price}} zł </span>/{{ item.Unit}}
            </div>
            <!-- <div class="add-card" @click="addProductToCart(item)"><i class="icofont-cart"></i>Dodaj do koszyka</div> -->
            <AddCard :product="item"/>