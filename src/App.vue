<template>

  <Header/>
  
  <Movies/>

</template>


<script>
import Header from './components/Header/Header.vue';
import Movies from './components/movies/Movies.vue';

export default {
  name: 'App',
  components: {
    Header,
    Movies
  }
}
</script>

<style>
@import './assets/base.css';

</style>
