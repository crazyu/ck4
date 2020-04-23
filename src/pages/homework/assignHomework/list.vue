<template>
  <div class="list-app">
    <ckeditor id=2 ref="ckeditor" />
    <div @click="test">测试纸</div>
  </div>
</template>
<script>
import ckeditor from '@/components/ck/index'
export default {
  components: {
    ckeditor
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  activated () {
  },
  methods: {
    test () {
      console.log(this.$refs.ckeditor)
    }
  }
}
</script>

<style lang="less">

</style>

<style lang="less" scoped>
.list-app {
  height: 80%;
  width: 80%;
  margin:  100px auto;
}

</style>
