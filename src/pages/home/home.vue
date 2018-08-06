<template>
  <div class="home-page">
    Você está logado
  </div>
</template>

<script>


export default {
  name: 'home',
  data() {
    return {

    }
  },

  methods: {

  },

  mounted () {
    console.log('home rendered')
  }

}
</script>

<style>

.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
}


</style>
