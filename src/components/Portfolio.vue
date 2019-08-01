<template>
<div>
         <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg
         >
         <h1>Portfolio</h1>
         <h3 v-if="portfolio.length == 0">You currently have no investments.</h3>
            <v-layout row wrap>
               <app-investment xs6 v-for="(investment,index) in portfolio" :key="index" :investment="investment"></app-investment>
            </v-layout>
         </v-container>
</div>
</template>

<script>
import Investment from "./Investment.vue";

export default {
    components: {
        "app-investment": Investment
    },
    computed: {
        portfolio() {
            return this.$store.getters.portfolio;
        }
    }
}
</script>