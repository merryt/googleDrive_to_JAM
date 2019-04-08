<template>

  <div>
    <div class="bio-line">
      <Author />
      Published on: {{date}}
    </div>
    <Content :custom="false"/>
  </div>


</template>

<style>
 .bio-line{
     display:flex;
     justify-content: space-between;
 }

</style>

<script>
 import Author from '../components/Author.vue'
 export default{
     components: {Author},
     computed: {
         date(){
             const{frontmatter} = this.$page
             return frontmatter.Date.replace(/\\/g,  "")
         }

     }

 }

</script>
