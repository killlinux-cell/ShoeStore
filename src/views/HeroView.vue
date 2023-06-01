<template>
    <section class="hero bg-warning text-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold mt-5">New Collection</h1>
          <p class="lead">Come and have a look, there are shoes in all sizes at low prices. You won't be disappointed.</p>
          <a href="#" class="btn btn-light">SHOP NOW</a>
        </div>
        <div class="col-lg-6">
          <img src="../assets/removebg.png" alt="Image héro" class="img-fluid">
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default{
    name: 'heroView',
}
</script>

<style scoped>

.hero {
      height: 427px; 
      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>