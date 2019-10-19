<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom" >当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list" v-for="ceil_item of item" :key="ceil_item.id">
                    <div class="item border-bottom">
                        {{ ceil_item.name }}
                    </div>
                </div>

            </div>
        </div>
        
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props : {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/variable.styl'
    .border-topbottom 
     &:before
        border-color: #777
     &:after
        border-color: #777

    .border-bottom 
     &:before
        border-color: #777
    .title
        line-height :.44rem
        background :#eee
        padding-left :.2rem
        font-size: .26rem
        color :#666
    .list
        position: absolute
        top:1.58rem
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
        .button-list
            padding: .1rem .5rem .1rem .1rem
            overflow :hidden
            .button-wrapper
                width: 33.3%
                float: left
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align : center
                    border-radius: .06rem
                    border: .02rem solid #ccc
        .item-list
            .item
                line-height :.24rem
                color: #666
                padding: .2rem
</style>