<template>
  <div>
    <p>{{title}}</p>
    <hello-child message='メッセージだよ'/>
  </div>
</template>

<script>
import HelloChild from './HelloChild'

export default {
  data: function(){
    return {
      title: 'ハロー！ワールド！'
    }
  },
  components:{
    HelloChild
  }
}
</script>
