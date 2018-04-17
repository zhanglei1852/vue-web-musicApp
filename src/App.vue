<template>
  <div id='app'>
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import mHeader from '@/components/common/mHeader/m-header'
export default {
  name: 'App',
  components: {
    mHeader
  }
}
</script>
<style lang='less'>
@import 'style/common.less';
</style>