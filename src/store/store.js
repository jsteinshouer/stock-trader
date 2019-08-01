import Vue from 'vue';
import Vuex from 'vuex';
import Portfolio from "./portfolio";
import Stocks from "./stocks";

Vue.use(Vuex);

export const store = new Vuex.Store({
    mutations: {
        restoreState: (state, payload) => {
            state.Portfolio.funds = payload.funds;
            state.Stocks.stocks = payload.stocks; 
            state.Portfolio.portfolio = payload.portfolio; 
        }
    },
    actions: {
        save( { state }) {
            let currentState = {
                stocks: state.Stocks.stocks,
                portfolio: state.Portfolio.portfolio,
                funds: state.Portfolio.funds
            };
            Vue.http.put('https://udemy-vuejs-7a74d.firebaseio.com/state.json', currentState)
                // .then(response => {
                //     // Get unique identifier
                //     //request.body.name
                //     //console.log(response);
                // });
        },
        restore( { commit } ) {
            /* Restore saved state */
            Vue.http.get('https://udemy-vuejs-7a74d.firebaseio.com/state.json')
                .then(response => {
                    // Get unique identifier
                    //request.body.name
                    commit("restoreState",response.body);

                });

        }
    },
    modules: {
        Portfolio,
        Stocks
    }
});