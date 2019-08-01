export const state = {
    stocks: [
        { name: "BMW", price: 75 },
        { name: "Google", price: 75 },
        { name: "Apple", price: 75 },
        { name: "Twitter", price: 75 }
    ]
};

export const getters = {
    stocks: state => {
        return state.stocks;
    }
};
    
export const mutations = {
    endDay: state => {
        state.stocks.forEach( (item) => {
            item.price = Math.round(item.price * (1 + Math.random() - 0.5));
        });
    }
};

export default {
    state,
    mutations,
    getters
}