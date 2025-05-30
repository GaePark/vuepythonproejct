<template>
  <HeaderView />
  <router-view />
</template>

<script>
import HeaderView from "./components/HeaderView.vue";

export default {
  name: "App",
  components: {
    HeaderView,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}
.container {
  margin-top: 50px;
}
</style>
