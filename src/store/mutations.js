export default {
  'SET_SINGER' (state, singer) {
    return state.singer = singer
  },
  'SET_PLAYING' (state, playing) {
    return state.playing = playing
  },
  'SET_PLAYLIST' (state, playList) {
    return state.playList = playList
  },
  'SET_PLAYINDEX' (state, playIndex) {
    return state.playIndex = playIndex
  },
  'SET_FULLSCREEN' (state, fullScreen) {
    return state.fullScreen = fullScreen
  },
  'SET_SEQUENCELIST' (state, sequenceList) {
    return state.sequenceList = sequenceList 
  }
}
