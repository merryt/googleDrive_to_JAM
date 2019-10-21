<template>
  <div class="article-page">

    <div class="article-date">{{date}}</div>

    <h1>{{title}}</h1>
    <Content :custom="false"/>
    <div class="bio-line content">
      <Author />
    </div>
  </div>


</template>

<script>
import Author from '../components/Author.vue';
import Navbar from '../components/Navbar.vue';

 export default{
     components: {Navbar, Author},
     computed: {
         frontmatter(){
             const{frontmatter} = this.$page;
             return frontmatter;
         },
         title(){
             let text = this.frontmatter.Title;
             text = text.split(' ');

             let titleCaseText = ""
             for(var c=0; c < text.length; c++) {
                 titleCaseText += text[c].substring(0,1).toUpperCase() + text[c].substring(1,text[c].length).toLowerCase() + (c+1==text.length ? '' : ' ');
             }

             return titleCaseText
         },
         date(){
             const date = new Date(this.frontmatter.Date.replace(/\\/g,  ""));
             const monthNames = [
                 "January", "February", "March",
                 "April", "May", "June", "July",
                 "August", "September", "October",
                 "November", "December"
             ];

             const day = date.getDate();
             const monthIndex = date.getMonth();
             const year = date.getFullYear();

             return day + ' ' + monthNames[monthIndex] + ' ' + year;
         }

     }

 }

</script>

<style>
 .bio-line{
     display:flex;
     justify-content: space-between;
 }
 .article-page{
     padding-top: 100px;
     height: 100%;
     min-height: 100vh;
     background-color: #fff;
     box-sizing: border-box;
 }
 .article-page h1{
     margin-top: 3px;
     font-size: 40px;
     font-weight: 900;
     text-align: center;
     text-transform: capitalize;
 }
 .article-date{
     text-align: center;
     text-transform: uppercase;
     color: #336699;
     text-weight: 800
 }
 .content,
 .content__default{
     position: relative;
     margin: 0 auto;
     padding: 0 100px;
     min-height: 230px;
     font-family: Georgia,serif;
     font-size: 20px;
     line-height: 14px;
     max-width: 800px;
     color: #3c484e;
 }
 ul > li > p{
   line-height: 1em;
   margin: 0;
 }
</style>
