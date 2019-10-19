<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list 
        :hotCities="hotCities" 
        :cities="cities" 
        :letter="letter"></city-list>
        <city-alphabet 
        :cities="cities" 
        @change="handleAlphabetClick"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            hotCities: [],
            cities: {},
            letter: ''
        }
    },
    methods : {
        getCityList() {
            axios.get('/api/city.json').then(this.getCityListSucc)
        },
        getCityListSucc(res){
            res = res.data
            console.log(res)
            if (res.ret && res.data) {
                const data = res.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        },
        handleAlphabetClick (letter) {
            this.letter = letter
        }
    },
    mounted() {
        this.getCityList()
    }
}
</script>

<style lang='stylus' scoped>
</style>