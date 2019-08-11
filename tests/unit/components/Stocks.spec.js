import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Stocks from '@/components/Stocks.vue'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('Stock.vue', () => {
    let wrapper;
    let getters;
    let store;

    const stocks = [
        {
            name: "ABC",
            price: 120
        },
        {
            name: "XYZ",
            price: 90
        }
    ]

   beforeEach(()=>{

       getters = {
           "stocks": jest.fn().mockReturnValue(stocks)
       }

      store = new Vuex.Store({
            getters
      });
      
   });

    it('should render the stock component for each stock', () => {
        wrapper = shallowMount(Stocks, { localVue, store });
        expect(wrapper.findAll("app-stock-stub").length).toBe(2);
    });

    it('should pass the stock object as a property', () => {
        wrapper = shallowMount(Stocks, { localVue, store });
        var subComponents = wrapper.findAll("app-stock-stub");
        expect(subComponents.at(0).props().stock).toBe(stocks[0])
        expect(subComponents.at(1).props().stock).toBe(stocks[1])
    });

});
