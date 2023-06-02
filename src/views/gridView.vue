<template>

    <div class="center-block">
    <h2>OUR PRODUCTS</h2>
  </div>
<!-- Mes articles -->
    <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4" v-for="article in articles" v-bind:key="article.id">
        <router-link :to="'/article/' + article.id" class="router-style">
          <div class="card element">
            <img :src="getArticleImageUrl(article)" class="card-img-top img-fluid card-img" :alt="article.attributes.title">
            <div class="card-body">
              <h5 class="card-title">{{ article.attributes.title }}</h5>
              <p class="card-text">{{ article.attributes.description }}</p>
            </div>
          </div>
        </router-link>
      </div>
<!-- Mes articles -->
    </div>
  </div>

</template>

<script>
import {useArticleStore} from "@/stores/store"

export default{
  setup(){

  },
    name: 'gridView',
    data(){
      return{
        articles: [],
      }
    },

    beforeMount() {
    const  fetched = useArticleStore();

    if (fetched.articles.length == 0) {
      fetched.getArticles()
    }

    let articless = fetched.articles;
    console.log(articless)
    this.articles.push(articless)
    this.articles = this.articles[0]
  },
  methods: {
    getArticleImageUrl(article) {
      if (article.attributes.thumbnail && article.attributes.thumbnail.data.length > 0) {
        return article.attributes.thumbnail.data[0].url;
      } else {
        
        return "../assets/airmax.png";
      }
    },
  }
}
</script>

<style scoped>

.center-block {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px; 
    }

    .card-img {
      width: 100%;
      height: 200px; 
      object-fit: cover;
    }

    .element {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.router-style{
  text-decoration: none;
}
</style>