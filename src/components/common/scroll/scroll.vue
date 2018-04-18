<template>
  <div class="wrapperContainer" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
	props: {
		data: {
			default:[]
		}
	},
  created () {
    this.$nextTick(() => {
      setTimeout(() => {
        this._initBScroll()
      },20) 
    })
  },
  methods: {
    _initBScroll () {
      if (this.scroll) {
        return false
      } else {
        this.scroll = new BetterScroll(this.$refs.wrapper, {
        })
      }
    }
  },
  watch: {
    'data' () {
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh()
        } else {
          this._initBScroll
        }
      })
    }
  }
}
</script>
<style lang="less">
</style>