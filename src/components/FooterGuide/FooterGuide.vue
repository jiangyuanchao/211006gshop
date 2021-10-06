<template>

<div class="footer_guide">
    <span href="javascript:;" class="guide_item touch" :class="{on:this.$route.path === '/msite'}" @click="goTo('/msite')" >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>

    <span href="javascript:;" class="guide_item touch" :class="{on:this.$route.path === '/search'}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>

    <span href="javascript:;" class="guide_item touch" :class="{on:this.$route.path === '/order'}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>

    <span href="javascript:;" class="guide_item touch" :class="{on:this.$route.path === '/profil'}" @click="goTo('/profil')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
    
</div>

</template>

<script>
    import reqAddress from '../../api/index'
export default {
  name:'FooterGuide',
  methods:{
    goTo(path){
      if(path!=this.$route.path){
        this.$router.replace(path) // 通过总路由控制不同路由页面的跳转显示
      }
    },
  },
    mounted(){
        reqAddress()
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.touch{
  touch-action:none
  }
  @import "../../common/stalus/mix.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
