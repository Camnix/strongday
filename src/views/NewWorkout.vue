<template>
  <div class="flex flex-col px-4 pt-4 mb-16">
    <Heading 
      title
      text="Start Workout"
      class="mb-8"
    />
    <Heading 
      label
      text="Quick Start"
      class="mb-2"
    />
    <VBtn
      primary
      text="Start an Empty Workout"
      class="sticky top-0 mb-5"
    />
    <Heading 
      secondary
      text="Routines"
      class="mb-2"
    />
    <Routines />
  </div>
</template>

<script>
import Routines from '../components/Routines';

export default {
  name: 'NewWorkout',
  components: {
    Routines
  }
};
</script>
