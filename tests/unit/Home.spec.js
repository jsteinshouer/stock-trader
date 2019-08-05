import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Home from '@/components/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuetify)
localVue.use(Vuex)
localVue.filter("dollarFormat", () => { return "$75,000" })

describe('Home.vue', () => {
    let wrapper;
    let getters;
    let store;

    beforeEach(()=>{

        getters = {
           "funds": jest.fn().mockReturnValue(75000)
        }

        store = new Vuex.Store({
            getters
        });
      
    });

    it('should get the current funds from the Vuex store', () => {
        wrapper = shallowMount(Home, {localVue, store});
        expect(getters.funds).toHaveBeenCalled();
        expect(wrapper.vm.funds).toBe(75000);
    });

    it('should display the current amount of funds', () => {
        wrapper = shallowMount(Home, {localVue, store});
        expect(wrapper.find("h2").text()).toBe("Your Funds: $75,000");
    });

});
