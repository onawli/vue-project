<template>
  <div class="cinema-list">
    <h1>我是影院页</h1>
  </div>
</template>

<script>
export default {
  name: 'Cinema'
}
</script>

<style lang="scss">
// @代表src 在webpack.base.conf里面可以设置
@import '@/styles/common/px2rem.scss';

.cinema-list{
  flex: 1;
}
</style>
