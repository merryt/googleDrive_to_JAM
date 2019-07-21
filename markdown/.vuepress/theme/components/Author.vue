<template>
  <div class="author">
    <div class="author-img"></div>
    <div class="author-content">
      <h3>Author</h3>
      <h2>Tyler Merry</h2>
    </div>
  </div>
</template>

<style scoped>
  .author{
      display:flex;
      align-items: center;
  }

 .author-img{
     width: 50px;
     height: 50px;
     border-radius: 30px;
     background-color: #ccc;
     margin-right: 10px;
     background: url('https://pbs.twimg.com/profile_images/801102056819978240/Xcv0iVIo_400x400.jpg');
     background-size: cover;
 }
 h2,h3{
     text-transform: uppercase;
     margin: 0
 }
 h3{
     font-size: 0.8rem;
     line-height: 1em;
     font-weight: 700;
     color: #999;
 }
 h2{
     color: #212931;
     font-size: 1.5rem;
     line-height: 1.2em;
     transition: color 0.5s ease;
 }
</style>
