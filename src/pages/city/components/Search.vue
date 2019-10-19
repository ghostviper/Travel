<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li 
                class="search-item border-bottom" 
                v-for="item in list" 
                :key="item.id">{{ item.name }}</li>
                <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
            </ul>
        </div>
    </div> 
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    props: {
        cities: Object
    },
    watch: {
        keyword () {
            //当keyword变化就去cities对象进行搜索 检索拼音和 文字出现的内容追加到list
            
            if (this.timer){
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value)=>{
                        if (value.spell.indexOf(this.keyword) > -1 ||
                        value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
            
        }
    },
    computed: {
        hasList () {
            return !this.list.length
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/variable.styl'
    .search
        height: .72rem
        background $bgColor
        padding: 0 .1rem
    .search-input
        height: .62rem
        line-height: .62rem
        width: 100%
        text-align:center
        color: #666
        border-radius: .06rem
        box-sizing: border-box
        padding: 0 .1rem
    .search-content
        overflow :hidden
        background: #eee 
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        z-index: 1
        .search-item
            line-height: .62rem 
            padding-left: .2rem 
            color: #666
            background: #fff
</style>