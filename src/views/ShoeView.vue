<script setup>
import {useArticleStore} from "@/stores/store"
const fetched = useArticleStore();

const articles = fetched.articles

let currentUrl =  window.location.href;
const splitUrl = currentUrl.split('/');
let currentId = splitUrl[4];
currentId = currentId - 1;

</script>

<template>
    <nav-view class="mb-4"></nav-view>
     <div class="article mb-5">
        <img src="../assets/jordan.png" alt="Photo de l'article">
        <h2>{{articles[currentId].attributes.title}}</h2>
        <p>{{articles[currentId].attributes.description}}</p>
    </div>


  <foot-view ></foot-view>

</template>

<script>
import FootView from "./FootView.vue";
import navView from "./navView.vue";

export default{
    name:'ShoeView',
    components:{
      FootView,
      navView,
    }
}
</script>

<style scoped>

.article {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f2f2f2;
      border-radius: 8px;
    }
    
    .article img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    
    .article h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .article p {
      text-align: center;
      line-height: 1.5;
    }
</style>