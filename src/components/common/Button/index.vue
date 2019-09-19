<template>
  <button
    :class="{
      'w-full py-2 rounded-lg': true,
      'bg-blue-500 text-gray-200': primary,
      'border border-blue-500 text-blue-500': secondary
    }"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
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