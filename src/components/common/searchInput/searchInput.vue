<template>
  <div class="searchBox">
    <span class="icon-search iconPos"></span>
    <input type="text" v-model="inputValue" :placeholder="placeholder" >
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    query (text) {
      this.inputValue = text
    }
  },
  watch: {
    'inputValue' () {
      this.$emit('query', this.inputValue)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../style/icon.less';
.searchBox{
  display: flex;
  color: #656565;
  height: 40px;
  width: 100%;
  position: relative;
  background:#333333;
  .iconPos{
    position: absolute;
    top:0;
    left: 0;
    color: #111111;
    font-size: 24px;
    line-height: 40px;
    padding-left: 8px;
  }
  input {
    height: 100%;
    width: 100%;
    line-height: 40px;
    padding-left: 40px;
    border: none;
    outline: none;
    background:#333333;
    color: #656565;
    padding-right: 10px;
  }
}
</style>
