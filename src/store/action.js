export default {
	'INIT_PLAY' ({commit, state}, {index, list}) {
		commit('SET_PLAYINDEX', index)
    commit('SET_PLAYING', true)
    commit('SET_FULLSCREEN', true)
    commit('SET_PLAYLIST', list)
	}
}