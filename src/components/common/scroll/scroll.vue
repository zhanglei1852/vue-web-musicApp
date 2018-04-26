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
		},
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      // 默认节流 减少scroll时触发的事件 3时触发实时滚动
      default: 1
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
      if (this.scroll || !this.$refs.wrapper) {
        return false
      } else {
        this.scroll = new BetterScroll(this.$refs.wrapper, {
          click: this.click,
          probeType: this.probeType
        })
        this._getScrollPosition()
      }
    },
    _getScrollPosition () {
      this.scroll.on('scroll', (pos) => {
        this.$emit('getPos', pos)
      })
    },
    scrollTo (x, y, time) {
      return this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    'data' () {
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh()
        } else {
          this._initBScroll()
        }
      })
    }
  }
}
</script>
<style lang="less">
</style>