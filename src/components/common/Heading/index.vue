<template>
  <div
    :class="{
      '': true,
      'text-3xl font-medium': title,
      '': secondary,
      '': label
    }"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    label: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>