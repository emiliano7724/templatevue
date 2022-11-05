<template>
  <div id="app">
    <div v-if="this.$router.currentRoute.name !== 'Login'">


      <NavBar :appName=appName />
      <b-jumbotron header="Template DIP" lead="Bootstrap v4 Components for Vue.js 2">

      </b-jumbotron>
    </div>
    <router-view />
  </div>
</template>
<script>

import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      appName: "AppTemplate"
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
