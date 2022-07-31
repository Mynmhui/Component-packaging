<template>
  <div>
    <!-- native 可以将组件上的原生作用于组件的根节点 -->
  <Zch-Button @click.native="clickHandler" size="mini" type="success" >登录</Zch-Button>
  <Zch-Button>
    <span>❤️</span>
    注册
  </Zch-Button>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>

</style>
