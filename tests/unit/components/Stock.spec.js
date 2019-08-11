import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Stock from '@/components/Stock.vue'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)

describe('Stock.vue', () => {
    let wrapper;
    let mutations;
    let store;

    const stock = {
        name: "Twitter",
        price: 120
    }

   beforeEach(()=>{

       mutations = {
           "buy": jest.fn()
       }

      store = new Vuex.Store({
            mutations
      });
      
   });

    it('renders stock name', () => {
        wrapper = shallowMount(Stock, { propsData: { stock }, localVue, store});
        expect(wrapper.find("div.headline").text()).toBe("Twitter");
    });

    it('renders stock price', () => {
        wrapper = shallowMount(Stock, { propsData: { stock }, localVue, store});
        expect(wrapper.html()).toContain('<div>(Price: 120)</div>');
    });

    it('should call the buy mutation when a quantity is entered and the button is clicked', () => {
        wrapper = mount(Stock, { propsData: { stock }, localVue, store});
        wrapper.setData( { quantity: 1 } );
        wrapper.find("button").trigger("click");
        expect(mutations.buy).toHaveBeenCalled();
    });

    it('should not call the buy mutation when a quantity is not entered and the button is clicked', () => {
        wrapper = mount(Stock, { propsData: { stock }, localVue, store});
        wrapper.setData( { quantity: 0} );
        wrapper.find("button").trigger("click");
        expect(mutations.buy).not.toHaveBeenCalled();
    });

});
