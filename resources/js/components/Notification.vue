<template>
    <div class="notification">
        TODO
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('fetchMarket');
    },
}
</script>