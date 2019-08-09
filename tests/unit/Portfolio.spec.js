import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Portfolio from '@/components/Portfolio.vue'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('Stock.vue', () => {
    let wrapper;
    let getters;
    let store;

    const portfolio = [
        {
            stock: {
                name: "ABC",
                price: 120
            },
            quantity: 20
        },
        {
            stock: {
                name: "XYZ",
                price: 90
            },
            quantity: 50
        }
    ]

   beforeEach(()=>{

       getters = {
           "portfolio": jest.fn().mockReturnValue(portfolio)
       }

      store = new Vuex.Store({
            getters
      });
      
   });

    it('should render a message if there are no investments in the portfolio', () => {
        getters.portfolio.mockReturnValue([]);
        wrapper = shallowMount(Portfolio, { localVue, store });
        expect(wrapper.find("h3").text()).toBe("You currently have no investments.");
    });

    it('should render the investment component for each item in portfolio', () => {
        wrapper = shallowMount(Portfolio, { localVue, store });
        expect(wrapper.findAll("app-investment-stub").length).toBe(2);
    });

    it('should pass the investment as a property to the child component', () => {
        wrapper = shallowMount(Portfolio, { localVue, store });
        var subComponents = wrapper.findAll("app-investment-stub");
        expect(subComponents.at(0).props().investment).toBe(portfolio[0])
        expect(subComponents.at(1).props().investment).toBe(portfolio[1])
    });

});
