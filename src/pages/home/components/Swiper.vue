<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class='swiper-img' :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: "0001",
                    imgUrl: "https://img1.qunarzz.com/vc/9c/50/b8/b31f609941e6b332cf46bab57d.jpg_650x360x92.jpg"
                },
                {
                    id: "0002",
                    imgUrl: "https://imgs.qunarzz.com/vc/a6/7e/ef/980225471133afc27d96803815.jpg_325x180x92.jpg"
                }
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.swiper-img
    width: 100%
.wrapper
    width :100%
    overflow: hidden
    height: 0
    padding-bottom: 55%
    background :#ccc

</style>