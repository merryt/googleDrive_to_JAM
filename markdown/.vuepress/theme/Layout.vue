<template>
  <div class="theme-container" >
    <script>
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
     })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

     ga('create', 'UA-24149420-1', 'auto');
     ga('send', 'pageview');

    </script>
    <Navbar :position="position[1]" :page="layout" />
    <component class="main-content" :is="layout"></component>
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swa');

html, body
  padding 0
  margin 0
  background-color #f4f8fb
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%

body
  font-family "Source Sans Pro",Helvetica,sans-serif
  font-size 16px
  text-rendering optimizeLegibility
  -webkit-font-smoothing antialiased

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25
  font-family "Source Sans Pro",Helvetica,sans-serif


a
  color: #7EBDC2

p, ul, ol
  line-height 1.7
</style>

<script>
 import Home from './layouts/Home.vue'
 import Post from './layouts/Post.vue'
 import Navbar from './components/Navbar.vue'
 import windowScrollPosition from './mixins/windowScrollPosition.js';

 export default{
     components: {Home, Post, Navbar },
     mixins: [windowScrollPosition('position')],
     computed: {
         layout(){
             const{path} = this.$page
             if(path === "/"){
                 return 'Home'
             }else{
                 return 'Post'
             }
         }

     }
 }
</script>
