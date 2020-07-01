<template>
    <div class="cartitem">
        <router-link class="img_link" exact :to="{ name:'product', params:{id:item.id}}" > 
            <!-- <p>{{defaultImage.image}}</p> -->
            <img v-if="!item.image" class="card_img" v-bind:src="'/articles/'+ defaultImage.image" /> 
            <!-- <img v-else class="card_img" v-bind:src="'/public/storage/produkty/'+ item.image+'.webp'" />  -->
            <img v-else class="card_img" v-bind:src="'/articles/'+ item.image" />
        </router-link>
        <p class="frm">{{ farmer }}</p>
        <router-link :to="{ name:'product', params:{id:item.id}}" >
            <h2 v-if="!item.name" class="product_title">{{ item.ArticleName }}</h2>
            <h2 v-else class="product_title">{{ item.name }}</h2>
        </router-link>
        <div class="price_block">
            <span class="strong">{{ item.price}} zł </span>/
            <!-- {{ unit }} -->
        </div>
        <AddCard :product="item"/>
    </div>
    
</template>
<script>
import AddCard from '../components/AddCard.vue';

export default {
    props: ['item'],

    data() {
        return {
            itemId: this.item.id,
        }
    },
    
    components: {
        AddCard,
    },
    computed: {
        defaultImage() {
            // return this.$store.getters.getDefaultImageByProductId(id);
            let products = this.$store.getters.getProductId(this.itemId);
            const defImage = products.images.find(element => element.isdefault === 1 );
            return defImage;
           // return this.$store.getters.getProductId(this.item.id);
        },
        farmer() {
            let products = this.$store.getters.getProductId(this.itemId);
            if( typeof(products.FarmerName) == "undefined") {
                return products.farmer.name;
            } else {
                return products.FarmerName;
            }
        },
        unit() {
            let products = this.$store.getters.getProductId(this.itemId);
            if( typeof(products.UnitName) == "undefined") {
                return products.unit.name;
            } else {
                return products.UnitName;
            }
        },

    },
    methods: {
        addProductToCart(product) {
            this.$store.dispatch('addToCart',product);
        }
    }
}
</script>