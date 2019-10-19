<template>
    <div class="list">
        <ul>
            <li 
            class="item" 
            v-for="key of letters" 
            :key="key" 
            @click="handleClick" 
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove" 
            @touchend="handleTouchEnd" 
            :ref="key">{{ key }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false
        }
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleClick (e) {
            //console.log(e.target.innerText)
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus == true) {
                const startY = this.$refs['A'][0].offsetTop //33
                const touchY = e.touches[0].clientY - 74  // 172
                const index = Math.floor((touchY - startY) / 20)
                if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
                }
            }

        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variable.styl'
.list
    display: flex 
    flex-direction: column 
    justify-content : center 
    position: absolute 
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item 
        text-align: center 
        line-height: .4rem 
        color: $bgColor
</style>