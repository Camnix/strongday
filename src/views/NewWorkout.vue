<template>
  <div class="flex flex-col">
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
      class="mb-5"
    />
    <Heading 
      secondary
      text="Routines"
      class=""
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
