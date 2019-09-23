<template>
  <div class="flex flex-wrap">
    <Heading
      :text="routineExample.name"
      class="w-full border-b-2 border-gray-200 pb-1 mb-2"
    />
    <div
      v-for="(e, i) in 20"
      :key="i"
      class="w-1/2"
    >
      <Routine :exercises="routineExample.workouts[0]" />
    </div>
  </div>
</template>

<script>
import routineExample from '../../../demo/workoutRoutine.json';
import Routine from './Routine';

export default {
  name: 'RoutineList',
  components: {
    Routine
  },
  data() {
    return {
      routineExample,
    };
  }
};
</script>
