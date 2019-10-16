<template>
    <div>
        <div class="title">
            周末去哪玩
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeWeekend",
    data () {
        return {
            recommendList: [
            {
                id: "0001",
                imgUrl: "https://imgs.qunarzz.com/p/p44/1412/3e/3ef2e2df4c8d2553cdb.jpg_256x160_66aa2ab3.jpg",
                title: "香港-欧洲 10天跟团游",
                desc: "美景如歌｜纯美东欧4国10天｜渔人堡+CK小镇+布拉格+哈尔施塔特+布达佩斯"
            },
            {
                id: "0002",
                imgUrl: "https://imgs.qunarzz.com/p/p44/1412/3e/3ef2e2df4c8d2553cdb.jpg_256x160_66aa2ab3.jpg",
                title: "香港-欧洲 10天跟团游",
                desc: "美景如歌｜纯美东欧4国10天｜渔人堡+CK小镇+布拉格+哈尔施塔特+布达佩斯"
            },
            {
                id: "0003",
                imgUrl: "https://imgs.qunarzz.com/p/p44/1412/3e/3ef2e2df4c8d2553cdb.jpg_256x160_66aa2ab3.jpg",
                title: "香港-欧洲 10天跟团游",
                desc: "美景如歌｜纯美东欧4国10天｜渔人堡+CK小镇+布拉格+哈尔施塔特+布达佩斯"
            }
        ]
    }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height :.8rem
    background :#eee
    text-indent :.2rem
    margin-top : .2rem
.item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom: 42.5%
    .item-img
        width:100%
.item-info 
    flex: 1
    min-width :0
    padding: .3rem .2rem
    .item-title
        line-height: .54rem
        font-size: .32rem 
        ellipsis()
    .item-desc
        line-height :.4rem
        color: #ccc
        ellipsis()
</style>