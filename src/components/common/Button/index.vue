<template>
  <button
    :class="{
      'w-full py-2 my-2 rounded-lg text-sm font-bold': true,
      'bg-blue-500 text-gray-200 hover:bg-blue-600 hover:shadow-md': primary,
      'border border-blue-500 text-blue-500': secondary,
      'text-red-700 hover:bg-red-100': tertiary
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
    tertiary: {
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