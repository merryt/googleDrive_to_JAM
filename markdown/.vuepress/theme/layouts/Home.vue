<template>
  <div class="home">
    <div class="home--hero">
      <h1>
        HEY!<br/>
        My name is Tyler,<br />
        I make things on the internet
      </h1>
      <h3>I am not special but you make me feel that way, thanks for checking me out!</h3>
    </div>
    <div class="home--images">
      <img src="/wireframes1.jpg"
           class="wireframes1"
           alt="Pen and paper wireframes can be useful to get ideas down fast!"
           :style="{transform: 'translateY(' + paralaxMagic + 'px)'}" >
      <img src="/climbing.jpg" class="climbing" alt="Tyler being a ham on a boat">
      <img src="/golfcart.jpg" class="golfcart" alt="My friends and I like to get in trouble form time to time">
      <img src="/speaking1.jpeg"
           class="speaking1"
           alt="My friends and I like to get in trouble form time to time"
           :style="{transform: 'translateX(-' + paralaxMagic + 'px)'}">
    </div>

    <div class="home--info">
      <h3>What do I do?</h3>
      <div class="hipster-spacer"></div>
      <p>I like to help people, the way I normally do that is through building easy to use websites that help people solve a problem. I also like to help people fix their bikes and maintain hiking trails.</p>
      <p>Previously I spoke at conferences, and run meetups in Denver. Now I try to help more one on one!</p>
    </div>

    <div class="home--post-container">
      <article class="home--post" v-for="post in posts.slice(0, 6)">
        <div class="home--post-image" :style="{background: backgroundUrl(post.frontmatter.mainImg)}"></div>
        <div class="home--post-content">
          <h4>
            <router-link :to="post.path">{{ post.frontmatter.Title }}</router-link>
          </h4>

          <p>{{ post.frontmatter.Description }}</p>

          <p><router-link :to="post.path">Read more</router-link></p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
 import windowScrollPosition from '../mixins/windowScrollPosition.js';

 export default {
     mixins: [windowScrollPosition('position')],
     computed: {
         data () {
             return this.$page.frontmatter
         },
         actionLink () {
             return {
                 link: this.data.actionLink,
                 text: this.data.actionText
             }
         },
         posts() {
             return this.$site.pages
                        .filter(x => x.path.startsWith('/') && !x.frontmatter.blog_index)
                        .sort((a, b) => new Date(b.frontmatter.Date.replace(/\\/g,  "")) - new Date(a.frontmatter.Date.replace(/\\/g,  "")));
         },
         paralaxMagic(){
             let target = this.position[1]/10
             return target
         }

     },
     methods:{
         backgroundUrl(url){
           if(url){
             return "url('" + url  + "')"
           }
         }
     }

 }
</script>

<style>

 .home--hero{
     margin: 100px 20px 30px 20px;
 }
 @media only screen and (min-device-width: 500px){
     .home--hero{
         margin: 58px 0;
     }
 }

 .home--hero h1{
     font-size: 70px;
     line-height: 74px;
 }
 .home--images{
     display: grid;
     grid-template-columns: 10% 30% 50% 10%;
     margin-bottom: 20px;
 }
 .home--images .speaking1,
 .home--images .climbing{
     grid-column-start: 3;
     grid-column-end: 4;
     width: 110%;
     margin-left: -5%;
     margin-top: 10%;
     z-index: 10;
 }
 .home--images .wireframes1,
 .home--images .golfcart{
     grid-column-start: 2;
     grid-column-end: 3;
     width: 100%;
     z-index:9;
 }
 .home--images .wireframes1{
     margin-left: 25px
 }
 .home--images .golfcart{
     margin-top: -2%;
 }

 .home--images .speaking1{
     margin-top: 10px;
     margin-left: 100px;
 }

 .hipster-spacer{
     min-height: 3px;
     width: 7%;
     background-color: #336699;
 }
 .home--info .hipster-spacer{background-color: #fff}
 .home--info{
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content: center;
     color: #fff;
     background: #336699;
     box-sizing:border-box;
     padding: 10% 10% 8% 10%;
 }
 .home--info h3{margin-top: 0;}
 .home--info p{text-align: center;}
 .home--post-container{
     width: 90%;
     margin: -30px auto 0 auto;
     display: flex;
     flex-wrap: wrap;
     justify-content:space-between

 }
 .home--post{
     flex: 1 1 300px;
     background: #fff;
     box-sizing:border-box;
     border-radius: 4px;
     box-shadow: 1px 3px 8px rgba(39,44,49,.03);
     margin: 0 20px 40px 20px;
 }
 .home--post-content{
     margin:15px;
 }
 .home--post .home--post-image{
     background: url("https://picsum.photos/id/472/400/200");
     width: auto;
     height: 200px;
     background-size:cover;

 }
 .home--post:nth-child(12n+3){
     flex: 1 1 100%;
     display:flex;
     height: 240px;
 }

 .home--post:nth-child(12n+3) .home--post-image{
     width:100%;
     height:100%;
 }
.home--post:nth-child(12n+3) .home--post-content{width: 50%;}

.home--post h4 > a{
     text-decoration:none;
     color: #333;
 }
 .home--post p {
     font-size: 15px;
     font-weight: 400;
     font-family: Georgia,sans-serif;
     color: #15171a;

 }


</style>
