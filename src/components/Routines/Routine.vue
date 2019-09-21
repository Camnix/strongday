<template>
  <div class="bg-white border border-gray-400 rounded-lg p-3 max-w-full">
    <Heading
      label
      :text="exercises.name"
      class="mb-1"
    />
    <Heading
      v-for="e in exercises.exercises"
      :key="e.setOrder"
      paragraph
      :text="e.name"
    />
  </div>
</template>

<script>
export default {
  name: 'Routine',
  props: {
    exercises: {
      type: Object,
      required: true
    }
  }
};
</script>
