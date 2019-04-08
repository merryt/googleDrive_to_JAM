<template>
  <div class="home">

    <div v-for="post in posts">
      <h4>
        <router-link :to="post.path">{{ post.frontmatter.Title }}</router-link>
      </h4>



        <!-- <p>{{ post.frontmatter.description }}</p>

             <p><router-link :to="post.path">Read more</router-link></p> -->
    </div>
  </div>
</template>

<script>
 import Navbar from '../components/Navbar.vue'
 export default {
     components: { Navbar },
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
                .filter(x => x.path.startsWith('/markdown/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.Date.replace(/\\/g,  "")) - new Date(a.frontmatter.Date.replace(/\\/g,  "")));
        }
     }
 }
</script>
