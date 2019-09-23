<template>
  <div
    id="app"
    class="flex flex-col h-full bg-gray-100"
  >
    <Navbar class="inset-x-0 bottom-0 fixed bg-gray-800 h-19 p-5 w-full" />
    <RouterView class="" />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>