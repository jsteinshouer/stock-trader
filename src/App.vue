<template>
    <v-app id="inspire">
        <v-app-bar app clipped-left color="blue-grey" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title><router-link to="/" style="color:white; text-decoration: none;">Stock Trader</router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="endDay">
                <v-icon>mdi-calendar</v-icon>
            </v-btn>
            <v-btn icon @click="save">
                <v-icon>mdi-cloud-upload</v-icon>
            </v-btn>
            <v-btn icon @click="restore">
                <v-icon>mdi-restore</v-icon>
            </v-btn>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Funds: {{ funds | dollarFormat }} &nbsp;&nbsp;&nbsp;&nbsp;
        </v-app-bar>
        <v-navigation-drawer
            clipped
            v-model="drawer"
            app
        >
            <v-list dense>
                <v-list-item to="/portfolio">
                    <v-list-item-action>
                        <v-icon>mdi-currency-usd</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Portfolio</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/stocks">
                    <v-list-item-action>
                        <v-icon>mdi-finance</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Stocks</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider dark class="my-4"></v-divider>
                <v-list-item @click="endDay">
                    <v-list-item-action>
                        <v-icon>mdi-calendar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>End Day</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="save">
                    <v-list-item-action>
                        <v-icon>mdi-cloud-upload</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Save</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="restore">
                    <v-list-item-action>
                        <v-icon>mdi-restore</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Restore</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-content-start>
                <v-flex xs12>
                <transition name="slide-y-transition" mode="out-in">
                    <router-view></router-view>
                </transition>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app fixed color="blue-grey" dark>
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