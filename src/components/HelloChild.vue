<template>
    <div>
        <p>{{date}}</p>
        <p>{{time}}</p>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    data: function(){
        return {
            date: '',
            time: ''
        }
    },
    mounted: function(){
        setInterval(this.updateTime,1000);
    },
    methods: {
        updateTime: function(){
            let current_date = dayjs()

            this.date = current_date.format('YYYY') + '-' 
                      + current_date.format('MM') + '-'
                      + current_date.format('d')
             
            this.time = current_date.format('HH') + ':'
                      + current_date.format('mm') + ':'
                      + current_date.format('ss')
        }
    }
}
</script>
