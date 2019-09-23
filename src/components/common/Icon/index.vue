<template>
  <img
    :src="require(`../../../assets/icons/${icon}.svg`)"
  >
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>