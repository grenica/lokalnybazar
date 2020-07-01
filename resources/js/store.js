import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';
import Cookies from "js-cookie"; 

Vue.use(Vuex);

// let host='http://api.localhost:8000';

// export default new Vuex.Store({
export const store =  new Vuex.Store({
    state: {   // = data
        user:localStorage.getItem('user') || null,
        token: localStorage.getItem('token') || null,
        marketID: localStorage.getItem('marketID') || null,
        marketName: localStorage.getItem('marketName') || null,
        products: [],
        categories:[],
        cart: [],
        
    },
    getters: {   // = computed properties
        // getMarket: (state) => {
        //     return state.market;
        // },
        // getMarketID: (state) => {
        //     return state.marketID;
        // },
        getProductId: (state) => (id) => {
            const prodId =  state.products.find(item => item.id === id);
            return prodId;
        },
        getProductCard: (state) => (id) => {
            const product =  state.cart.find(item => item.id === id);
            return product;
        },
        cartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(item => item.id === cartItem.id)
                return {
                    id: cartItem.id,
                    name: product.name,
                    price: product.price,
                    quantity: cartItem.quantity,
                    unit: product.Unit,
                    image:product.images
                }
            })
        },
        cartTotal(state,getters) {
            let total = 0;
            getters.cartProducts.forEach(item => {
                total += item.price * item.quantity;
            });
            return total;
        }
    },
    mutations: {
        setMarketID(state,id) {
            // state.market = market;
           localStorage.setItem('marketID',id);
          // localStorage.setItem('marketName',market.name);
        },
        setMarket(state,market) {
           localStorage.setItem('marketID',market.id);
           localStorage.setItem('marketName',market.name);
        },
        setUser(state,data) {
            state.user = data;
            // zapisuje do web storage
            localStorage.setItem("user",data);
        },
        setToken(state,token) {
            // state.token = token;
            localStorage.setItem("token",token);
        },
        setCategories(state,cat) {
            state.categories = cat;
        },
        setProducts(state,products) {
            state.products = products;
        },
        incrementItemQuantity(state,cartItem) {
            //cartItem.quantity++;
           let myItem = state.cart.find(item => item.id === cartItem.id);
           myItem.quantity++;
           
        },
        decrementItemQuantity(state,cartItem) {
            // cartItem.quantity--;
           // console.log('Usuwam ilosc z koszyka');
             let myItem = state.cart.find(item => item.id === cartItem.id);
            let index = state.cart.indexOf(myItem);
            //console.log('Index: '+index);
            myItem.quantity--;
            if(myItem.quantity === 0 ) {
                //console.log('To usuń z tablicy CART');
                state.cart.splice(index,1);
            }
        },
        removeItem(state,productId) {
            //znajduje pozycje w state.cart == productid
            const productItem = this.state.cart.find(item => item.id === productId);
            //usuwam z tablicy pozycje o okreslonym indexie
            state.cart.splice(state.cart.indexOf(productItem),1);
        },
        clearCart(state) {
            state.cart = [];
        },
        // const cartItem ={id: 1234, quantity =1 }
        pushProductToCart(state,productId) {
            let myItem = state.products.find(item => item.id === productId);
            state.cart.push({
                id: productId,
                quantity: 1,
                image: myItem.image,
                name: myItem.name,
                price: myItem.price,
            });
        },
        updateProduct(state,product) {
            const productItem = this.state.products.find(item => item.id === product.id);
           //usuwam znalezniony element, pobieram pełne dane z API
           this.state.products.splice(this.state.products.indexOf(productItem),1);
            state.products.push({
                FarmerName: product.FarmerName,
                FarmerId: product.FarmerId,
                id: product.id,
                images: product.images,
                Unit: product.Unit,
                name: product.name,
                price: product.price,
                desc: product.desc
            });
        },
    },
    actions: {  // = methods
        fetchMarket({commit}) {
            console.log('fetchMarket');

            let cookie = Cookies.get('market');
            axios.get('/api/market/'+cookie)
            .then(
                response => {
                    //commit('setMarketID',response.data.id);
                    commit('setMarket',response.data);
                }
            );
        },
        fetchCategories({commit}) {
            axios.get('/api/category')
            .then(
                response => {
                    commit('setCategories',response.data);
                }
            );
        },
        fetchProductsNews({commit}) {
           
            //console.log('fetchProductsNews : '+this.state.marketID);
            axios.get('/api/news_main/'+this.state.marketID)
            .then(
                response => {
                    commit('setProducts',response.data);
                }
            ); 
        },
        addToCart(context,product) {
            //find cart
            const cartItem = context.state.cart.find(item => item.id === product.id );
            if(!cartItem) {
                //pushProductToCart
                context.commit('pushProductToCart', product.id);
                console.log('push product to card');
            } else {
                //incrementItemQuantity
                context.commit('incrementItemQuantity',cartItem);
                console.log('increment Item');
            }
        },
        decrementProductItem({commit},product) {
            const cartItem = this.state.cart.find(item => item.id === product.id );
            commit('decrementItemQuantity',cartItem);
        },
        loginuser({commit},user) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login',user ).then(response => {
                    console.log(response.data);
                    commit('setUser',response.data.user);
                    commit('setToken',response.data.token);

                    // router.push({name: 'welcome'});  
                })
                .catch(function (error) {
                    console.log(error);
                });
            });
        },
        fetchProductsByCategory({commit},category) {

            // $this.state.filters=[];
            const categoryItem = this.state.categories.find(item => item.name === category);
            console.log('categoryItem:  '+categoryItem.name+ 'ID: '+categoryItem.id);

            axios.get('/api/'+this.state.marketslug+'/category/'+categoryItem.id)
            .then(
                response => {
                    //zamieniam pobrany objekt na tablicę
                    // commit('setProducts',Object.entries(response.data));
                    commit('setProducts',response.data["data"]);
                    commit('setMeta',response.data["meta"]);
                }
            )
            .catch(function (error) {
                console.log('Error:  '+error);
            });
            //odpytuje API - Filter
            axios.get('/api/'+this.state.marketslug+'/filter/'+categoryItem.id)
            .then(
                response => {
                    commit('setFilter',response.data);
                }
            );
        },
        fetchFilter({commit}) {
            axios.get('/api/'+this.state.marketslug+'/filter/news')
            .then(
                response => {
                    commit('setFilter',response.data);
                }
            );
        },
        fetchProduct({commit},productId) {
            const productItem = this.state.products.find(item => item.id === productId);
            console.log('szukam produkt ID:'+productId);
            //usuwam znalezniony element, pobieram pełne dane z API
            //this.state.products.splice(this.state.products.indexOf(productItem),1);
            console.log('pobieram z API ....');
             axios.get('/api/product/'+productId)
                 .then(
                     response => {
                         commit('updateProduct',response.data[0]);
                     }
                 ); 
         
         },
        // zamównienie 
        order({commit}) {
            var config = {
                headers: {'Authorization': 'Bearer '+this.state.token}
            };
            axios.post('/api/order', {
                // firstName: 'Fred',
                // lastName: 'Flintstone',
                cart: this.state.cart,
                marketID: this.state.marketID,
                // user: this.state.user
              }, config)
              .then(function (response) {
                console.log(response);
                console.log('pomyslnie zapisano zamównienie');
                //czyscze liste cart
                commit('clearCart');
              })
              .catch(function (error) {
                console.log(error);
              });
        },

    }
});