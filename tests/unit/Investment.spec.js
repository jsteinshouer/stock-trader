import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Investment from '@/components/Investment.vue'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('Investment.vue', () => {
    let wrapper;
    let mutations;
    let store;

    const investment = {
        stock: {
            name: "XYZ Inc.",
            price: 75
        },
        quantity: 100
    }

   beforeEach(()=>{

       mutations = {
           "sell": jest.fn()
       }

      store = new Vuex.Store({
            mutations
      });
      
   });

    it('should render the name of the company', () => {
        wrapper = shallowMount(Investment, { propsData: { investment }, localVue, store});
        expect(wrapper.find("div.headline").text()).toBe("XYZ Inc.");
    });

    it('should render the current stock price and quantity owned', () => {
        wrapper = shallowMount(Investment, { propsData: { investment }, localVue, store});
        expect(wrapper.html()).toContain('<div>(Price: 75 | Quantity: 100)</div>');
    });

    it('should call the sell mutation when a quantity is entered and the button is clicked', () => {
        wrapper = mount(Investment, { propsData: { investment }, localVue, store});
        wrapper.setData( { quantity: 1 } );
        wrapper.find("button").trigger("click");
        expect(mutations.sell).toHaveBeenCalled();
    });

    it('should not call the sell mutation when a quantity is not entered and the button is clicked', () => {
        wrapper = mount(Investment, { propsData: { investment }, localVue, store});
        wrapper.setData( { quantity: 0} );
        wrapper.find("button").trigger("click");
        expect(mutations.sell).not.toHaveBeenCalled();
    });

});
