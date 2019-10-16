<template>
    <div class="icons">
        <swiper class="swiper-container">
            <swiper-slide v-for="page of pages" :key="page.index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.iconUrl" alt="">
                    </div>
                    <p class="icon-desc">{{ item.iconDesc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    data () {
        return {
            iconList: [
                {
                    id: 0,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    iconDesc: "景点门票"
                },
                {
                    id: 1,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/flight.png",
                    iconDesc: "机票"
                },
                {
                    id: 2,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
                    iconDesc: "度假"
                },
                {
                    id: 3,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                    iconDesc: "酒店"
                },
                {
                    id: 4,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/freeTravel.png",
                    iconDesc: "自由行"
                },
                {
                    id: 5,
                    iconUrl: "https://picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png",
                    iconDesc: "一日游"
                },
                {
                    id: 6,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/car.png",
                    iconDesc: "专车自驾"
                },
                {
                    id: 7,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/tuan.png",
                    iconDesc: "旅游团购"
                },
                {
                    id: 8,
                    iconUrl: "https://s.qunarzz.com/homenode/images/touchheader/travel.png",
                    iconDesc: "攻略"
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach( (item, index)=> {
                const page = Math.floor(index / 8)
                if (!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
.icons 
    margin-top :.2rem
.icons >>> .swiper-container
    height : 0
    padding-bottom :50%
    .icon 
       position relative
       overflow hidden
       float: left
       width : 25% 
       height: 0
       padding-bottom: 25%
       .icon-img
           position absolute
           top 0
           left 0
           right 0
           bottom .44rem 
           --moz-box-sizing border-box
           --webkit-box-sizing border-box
           padding: .1rem
           .icon-img-content
               display block 
               margin auto
               height: 100%
        .icon-desc
            position absolute
            left: 0
            right: 0
            bottom 0
            line-height .44rem
            height .44rem
            color $darkTextColor
            text-align: center
            ellipsis()
           
</style>