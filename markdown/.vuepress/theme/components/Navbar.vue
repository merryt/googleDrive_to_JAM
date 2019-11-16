<template>
  <nav class="navbar"">
    <div class="logo" v-on:click="menuHidden = !menuHidden"><a>TM</a></div>
    <div class="nav-items" v-bind:class="{ hide: menuHidden }" v-on:click="menuHidden = !menuHidden" >
      <a href="/" class="nav-item">Home</a>
      <a href="/articles.html" class="nav-item">Words</a>
      <a href="/my-design-process.html" class="nav-item">Process</a>
      <a href="https://github.com/merryt" class="nav-item">Code</a>
      <a href="https://www.behance.net/merryt" class="nav-item">Portfolio</a>
      <a href="https://dribbble.com/tymerry" class="nav-item">Dribbble</a>
      <a href="https://www.linkedin.com/in/merryt" class="nav-item">LinkedIn</a>
      <a href="https://twitter.com/Tyler_Merry" class="nav-item">Twitter</a>
    </div>

  </nav>
</template>

<script>
 export default{
     data:function(){
         return {menuHidden: true}
     },
     props: {
         'position': {
             type: Number,
             default: 1000
         },
         'page': {type:String}
     },
 }
</script>

<style>
 nav.navbar{
     z-index: 100;
     top: 1%;
     position:fixed;
 }
 @media only screen and (min-device-width: 500px){
     nav.navbar{
         position: sticky;
         grid-column: 2;
         align-self: start;
         top: 5%;
     }
 }

 .logo{
     background-color: #336699;
     display: flex;
     align-items: center;
     border-radius: 50%;
     height: 60px;
     width: 60px;
     box-sizing: border-box;
     justify-content: center;
     z-index:301;
     position: sticky;
     margin-left: 7px;
     box-shadow: inset 0px 0px 0px 1px rgba(255,255,255, .25)
 }

 .logo a{
     font-weight:200;
     text-decoration: none;
     color: #fff;
     font-size: 25px;
     font-weight:900;

 }


 .nav-items{
     z-index:300;
     display: grid;
     position: fixed;
     box-sizing:border-box;
     padding-top: 3%;
     width: 100%;
     height: 100%;
     background: rgba(5, 23, 40, 0.99);;
     top: 0;
     left: 0;
     grid-template-columns: 60px auto 50px;
     grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% auto;
 }
 @media only screen and (min-device-width: 500px){
     .nav-items{
         grid-template-columns: 5% 70px auto 50px;
     }
 }

 .nav-item{
     text-decoration: none;
     margin-left: 10px;
     text-transform: uppercase;
     font-weight: 700;
     grid-column-start: 2;
     grid-column-end: 3;
     font-family: 'Merriweather', serif;
     color: #fff;
     font-size:3em;
     transition:all .5s ease-in;
     border-bottom: 5px solid transparent;
 }

 @media only screen and (min-device-width: 500px){
     .nav-item{
         font-size: 3.2em;
         grid-column-start: 3;
         grid-column-end:4;
     }
 }
 .nav-item:hover{
     border-bottom-color: #fff;
 }

 .hide{
     display:none;
 }



</style>
