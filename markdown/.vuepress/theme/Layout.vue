<template>
  <div class="theme-container" >
    <!-- <meta name="google-site-verification" content="8bkDTzGwYEt1P4NaDKuhxLUJbosgzc0Pz3tPP29wAgE"> -->
    <Navbar :position="position[1]"  :page="layout" />
    <component class="main-content" :is="layout"></component>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather|Source+Sans+Pro:300,400,600,700,900&display=swap');

html, body{
    padding: 0;
    margin: 0;
    background-color: #f4f8fb;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body{
    font-family: "Source Sans Pro",Helvetica,sans-serif;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

 @media only screen and (min-device-width: 500px){
     .theme-container{
         display:grid;
         grid-template-columns: 5% 100px auto calc(5% + 100px);
     }
 }

strong{
    font-weight: 600;
}

h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    line-height: 1.25;
  font-family: 'Merriweather', serif;
}

a{
    color: #7EBDC2
}
p, ul, ol{
    line-height: 1.7;
}
.main-content{
    grid-column: 3;
    max-width: 1250px;
}
</style>

<script>
 import Home from './layouts/Home.vue'
 import Post from './layouts/Post.vue'
 import List from './layouts/List.vue'
 import Navbar from './components/Navbar.vue'
 import windowScrollPosition from './mixins/windowScrollPosition.js';

 export default{
     components: {Home, Post, List, Navbar },
     mixins: [windowScrollPosition('position')],
     computed: {
         layout(){
             const{path} = this.$page;
             if(path === "/"){
                 return 'Home';
             }else if(path.startsWith("/articles")){
                 return 'List';
             }else{
                 return 'Post';
             }
         }

     }
 }
</script>
