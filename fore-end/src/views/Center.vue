<template>
  <div class="center-view">
    <h1>我是个人中心</h1>
  </div>
</template>

<script>
export default {
  name: 'Center'
}
</script>

<style lang="scss">
// @代表src 在webpack.base.conf里面可以设置
@import '@/styles/common/px2rem.scss';

.center-view{
  flex: 1;
}
</style>
