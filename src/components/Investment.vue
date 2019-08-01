<template>
  <v-flex xs6>
   <v-card color="blue-grey" class="lighten-5">
      <v-card-title primary-title>
         <div class="headline">{{investment.stock.name}}</div>&nbsp;&nbsp;
         <div>(Price: {{investment.stock.price}} | Quantity: {{ investment.quantity }})</div>
      </v-card-title>
      <v-card-actions>
      <v-flex xs6>
         <v-text-field
         name="input-1-3"
         label="Quantity"
         single-line
         v-model="quantity"
         type="number"
         ></v-text-field>
      </v-flex>
      <v-flex xs6>
      <v-btn @click="sell">Sell</v-btn>
      </v-flex>
      </v-card-actions>
   </v-card>
   </v-flex>
</template>

<script>
export default {
  props: ["investment"],
  data() {
     return {
        quantity: null
     }
  },
  methods: {
   sell() {
      if (this.quantity && this.quantity > 0) {
         this.$store.commit('sell',{ stock: this.investment.stock, quantity: parseInt(this.quantity,10) });
      }
   }
  }
}
</script>

