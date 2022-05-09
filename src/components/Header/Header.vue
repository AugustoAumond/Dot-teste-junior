<script setup>
import HeaderTop from './headertop/Headertop.vue';
import Menu1 from './menu/Menu.vue';
</script>

<template>
  <div class="header">

    <HeaderTop/>
  
    <Menu1/>   

  </div>
</template>

<style scoped>
.header {
  position: relative;
  top: 0px;
  height: 90px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

</style>
