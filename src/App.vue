<template>
  <v-app>
    <Nav />

    <v-content>
      <router-view class="animated fadeIn"></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

export default {
  name: "App",

  components: {
    Nav,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
html,
body {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
