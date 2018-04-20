import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as getters from  './getters'
Vue.use(Vuex)
const state = {
	singer: {}
} 
export default new Vuex.Store({
	state,
	getters,
	mutations
})