const state = {
    funds: 10000,
    portfolio: [
        { name: "BMW", quantity: 0, stock: null },
        { name: "Google", quantity: 0, stock: null },
        { name: "Apple", quantity: 0, stock: null },
        { name: "Twitter", quantity: 0, stock: null }
    ]
}

const getters = {
    funds: state => {
        return state.funds;
    },
    portfolio: state => {
        /* Only return items that have a quantity */
        return state.portfolio.filter( item => item.quantity > 0 );
    }
}

const mutations = {
    buy: (state, payload) => {
        let stock = payload.stock;
        let investment = null;
        let cost = stock.price * payload.quantity;

        if ( state.funds > cost ) {
            state.portfolio.forEach( (item) => {
                if ( item.name ==  stock.name ) {
                    investment = item
                }    
            });

            investment.stock = stock;
            investment.quantity = investment.quantity + payload.quantity;
            state.funds = state.funds - cost;
        }
    },
    sell: (state, payload) => {
        let stock = payload.stock;
        let investment = null;

        state.portfolio.forEach( (item) => {
            if ( item.name ==  stock.name ) {
                investment = item;
            }    
        });

        if (investment.quantity >= payload.quantity) {
            investment.quantity = investment.quantity - payload.quantity;
            state.funds = state.funds + (stock.price * payload.quantity);
        }

    }
}

export default {
    state,
    mutations,
    getters
}