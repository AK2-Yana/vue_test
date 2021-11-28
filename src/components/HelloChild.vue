<template>
    <div>
        <p>{{title}}</p>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            title: 'ハロー子供'
        }
    },
    props: ['message']
}
</script>
