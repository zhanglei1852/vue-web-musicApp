import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'playList'
    ]),
    calBottom () { 
      if (this.playList.length) {
        return "69px"
      } else {
        return 0
      }
    }
  },
  watch: {
    'calBottom' () {
    }
  }
}