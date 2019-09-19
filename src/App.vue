<template>
  <div
    id="app"
    class="container mx-auto px-4 mt-4"
  >
    <Navbar class="inset-x-0 bottom-0 fixed bg-gray-800 h-19 p-5 sm:relative" />
    <RouterView />
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