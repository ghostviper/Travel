<template>
    <div class='header'>
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入/城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">{{ this.$store.state.city }}
                <span class="iconfont arrow-icon">&#xe62d;</span>
            </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/variable.styl'
.header
    line-height: $headerHeight
    display: flex
    background :$bgColor
    color: #fff
    .header-left
        width:.64rem
        padding-left:.1rem
        float:left
            .back-icon
                text-align: center
                font-size:.24rem

    .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-top:.12rem
        margin-left:.2rem
        background-color: #fff
        border-radius: .1rem
        color:#ccc
        padding-left:.2rem

    .header-right
        min-width: 1.04rem
        padding: 0 .2rem
        float: right
        text-align: center
        color: blue
        .arrow-icon
            font-size:.24rem
</style>