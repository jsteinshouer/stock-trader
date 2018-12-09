<template>
  <v-app id="inspire">
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile to="/portfolio">
          <v-list-tile-action>
            <v-icon>attach_money</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Portfolio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/stocks">
          <v-list-tile-action>
            <v-icon>trending_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Stocks</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left color="blue-grey" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/">Stock Trader</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="endDay">
        <v-icon>today</v-icon>
      </v-btn>
      <v-btn icon @click="save">
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn icon @click="restore">
        <v-icon>restore</v-icon>
      </v-btn>
      &nbsp;&nbsp;&nbsp;&nbsp;
      Funds: {{ funds | dollarFormat }} &nbsp;&nbsp;&nbsp;&nbsp;
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-content-start>
        <v-flex xs12>
        <transition name="slide-y-transition" mode="out-in">
        <!-- <transition name="fade-transition" mode="out-in"> -->
          <router-view></router-view>
        </transition>

            <!-- <v-tooltip right>
              <v-btn
                icon
                large
                :href="source"
                target="_blank"
                slot="activator"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed color="blue-grey" dark>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      endDay() {
        this.$store.commit("endDay");
      },
      save() {
        this.$store.dispatch("save");
      },
      restore() {
        this.$store.dispatch("restore");
      }
    }
  }
</script>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }
</style>