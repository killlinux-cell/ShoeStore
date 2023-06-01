<template>
    <nav-view></nav-view>
    <hero-view></hero-view>
    <grid-view></grid-view>
    <footView></footView>
</template>

<script>
import navView from "./views/navView.vue";
import footView from "./views/FootView.vue";
import HeroView from './views/HeroView.vue';
import gridView from './views/gridView.vue';

export default{
    components: {
        navView,
        footView,
        HeroView,
        gridView,
    }
}
</script>