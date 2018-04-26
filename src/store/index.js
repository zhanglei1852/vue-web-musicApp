import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as getters from  './getters'
import actions from './action'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
const state = {
	singer: {},
	// 是否播放
	playing: false,
	// 播放列表
	playList: [],
	// 正在播放的index
	playIndex: -1,
	// 是否全屏播放
	fullScreen: false,
	// 顺序列表
	sequenceList: [],
	// 歌单
	mainList: {},
	// 榜单 
	topList: {}
} 
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: debug,
 	plugins: debug ? [createLogger()] : []
})