<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeRecommend",
    data () {
        return {
            recommendList: [
            {
                id: "0001",
                imgUrl: "https://imgs.qunarzz.com/vs_ceph_vs_tts/9a598575-6762-41dc-b832-0bae0e730c45.jpg_r_480x320x90_fcf57c19.jpg",
                title: "香港-欧洲 10天跟团游",
                desc: "美景如歌｜纯美东欧4国10天｜渔人堡+CK小镇+布拉格+哈尔施塔特+布达佩斯"
            },
            {
                id: "0002",
                imgUrl: "https://imgs.qunarzz.com/vs_ceph_vs_tts/9a598575-6762-41dc-b832-0bae0e730c45.jpg_r_480x320x90_fcf57c19.jpg",
                title: "香港-欧洲 10天跟团游",
                desc: "美景如歌｜纯美东欧4国10天｜渔人堡+CK小镇+布拉格+哈尔施塔特+布达佩斯"
            },
            {
                id: "0003",
                imgUrl: "https://imgs.qunarzz.com/vs_ceph_vs_tts/9a598575-6762-41dc-b832-0bae0e730c45.jpg_r_480x320x90_fcf57c19.jpg",
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
.item 
    display:flex
    height: 1.9rem
    overflow : hidden
    padding-bottom: .1rem
    .item-img
        height :1.7rem
        width :1.7rem
        padding: .1rem 
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
        .item-button
            background :#ff9300
            padding: 0 .1rem 
            border-radius: .06rem
            line-height :.4rem
            color :#fff
</style>