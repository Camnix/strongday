<template>
  <div
    :class="{
      '': true,
      'text-3xl font-medium': title,
      'text-2xl font-medium': secondary,
      'text-base font-weight-bold': label,
      'text-xs text-gray-600': paragraph
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
    paragraph: {
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