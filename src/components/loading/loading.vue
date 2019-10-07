<template>
  <div class="loading">
      <img src="../../assets/loading/loading3.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .loading{
       width: 100%;
       height:100vh;
       overflow: hidden;
       position:fixed;
       top:0;
       left:0;
       background-color: white;
   }

   .loading img{
       width:100%;
       height: auto;
       position: fixed;
       top:50%;
       left:50%;
       transform: translate(-50%,-50%);
   }
</style>
