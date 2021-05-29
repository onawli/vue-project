<template>
  <div class="films-list">
    <h1>我是电影页</h1>
  </div>
</template>

<script>
export default {
  name: 'Films'
}
</script>

<style lang="scss">
// @代表src 在webpack.base.conf里面可以设置
@import '@/styles/common/px2rem.scss';

.films-list{
  flex: 1;
}
</style>
