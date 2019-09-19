<template>
  <div class="flex justify-around text-xs text-gray-600">
    <RouterLink
      v-for="(item, index) in links"
      :key="index"
      :to="item.to"
      exact
      active-class="text-gray-400"
    >
      {{ item.name }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          to: '/profile',
          name: 'Profile'
        },
        {
          to: '/history',
          name: 'History'
        },
        {
          to: '/',
          name: 'Start Workout'
        },
        {
          to: '/exercises',
          name: 'Exercises'
        },
        {
          to: '/body',
          name: 'Body'
        }
      ]
    };
  }
};
</script>