<template>
  <div>
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
  @import 'assets/scss/main';
  @import url("~font-awesome/css/font-awesome.css");
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
  body{
    font-family: 'Poppins', sans-serif;
  }
</style>