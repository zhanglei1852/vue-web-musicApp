<template>
  <div id='app'>
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>
<script>
import mHeader from '@/components/common/mHeader/m-header'
import player from '@/components/pages/player'
export default {
  name: 'App',
  components: {
    mHeader,
    player
  }
}
</script>
<style lang='less'>
@import 'style/common.less';
</style>