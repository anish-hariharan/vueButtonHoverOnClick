Vue.createApp({
data () {
    return {
        first : false,
        second: false,
        third: false
    }
},

methods : {
    color () {
        
    },
    boxSelected(box){
        if(box === 'A'){
            !this.first ? this.first = true : this.first = false
        }else if(box === 'B'){
            !this.second ? this.second = true : this.second = false
        }else if(box === 'C'){
            !this.third ? this.third = true : this.third = false
        }
    }
}

}).mount('#styling')

