<template>
  <div class="theme-container" >
    <Navbar :position="position[1]" :page="layout" />
    <component class="main-content" :is="layout"></component>
  </div>
</template>

<style lang="stylus">
html, body
  padding 0
  margin 0
  background-color #f4f8fb
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%

body
  font-family -apple-system, "Droid Sans", sans-serif
  font-size 16px
  text-rendering optimizeLegibility
  -webkit-font-smoothing antialiased

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25

h1
  color: #231F20

h2
  color: #BB4430

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
