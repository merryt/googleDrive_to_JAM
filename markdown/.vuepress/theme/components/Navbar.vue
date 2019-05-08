<template>
  <nav class="navbar" :style="{backgroundColor: 'rgba(12,12,12,' + bgOpacity + ')' }">
    <div class="logo"><a href="/">Drive To Jam </a></div>
    <div class="nav-items">
      <a href="/" class="nav-item">About<span class="nav--comment">(generic white guys)</span></a>
      <a href="#" class="nav-item">Other Projects <span class="nav--comment">(dribbble/github bs)</span></a>
    </div>

  </nav>
</template>

<script>
 export default{
     props: {
         'position': {
             type: Number,
             default: 1000
         },
         'page': {type:String}
     },
     computed:{
         bgOpacity(){
             if(this.page === 'Home'){
                 return (this.position / 600)
             }else{
                 return 1
             }
         }
     }

     }

</script>

<style>
 nav.navbar{
     position:fixed;
     top: 0px;
     z-index: 100;
     border-bottom: 2px solid #336699;
     color: #fff;
     width: 100%;
     height: 60px;
     display:flex;
     padding: 0 10px;
     box-sizing: border-box;
     align-items: center;
     justify-content: space-between;
     background-color: rgba(255,255,255, 0);
 }

 .logo a{
     font-weight:200;
     text-decoration: none;
     color: #fff;
     font-size: 25px;
 }

 .nav-item{
     color: #fff;
     text-decoration: none;
     margin-left: 10px;
     text-transform: uppercase;
     font-size: 14px;
     font-weight: 700;
 }
 .nav--comment{
     text-transform:none;
     font-weight: 100;
 }


</style>
