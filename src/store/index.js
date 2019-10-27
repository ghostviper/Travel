import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

let defaultCity = '上海'
try {
    if (!localStorage.city) {
        localStorage.city = defaultCity
    }
} catch (e) {

}

export default new Vuex.Store({
    state: {
        city: localStorage.city || '上海'
    },
    actions: {
        changeCity (ctx, city) {
            ctx.commit('changeCity', city)
            // dispatch=>actions=>commit=>mutation
        }
    },
    mutations:  mutations
})