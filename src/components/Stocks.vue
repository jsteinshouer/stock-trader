<template>
<div>
    <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
    >
        <h1>Stocks</h1>
        <v-layout row wrap>
            <app-stock v-for="(stock,index) in stocks" :stock="stock" :key="index"></app-stock>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
    components: {
        "app-stock": Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>