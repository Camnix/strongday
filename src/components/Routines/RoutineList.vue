<template>
  <div class="flex flex-wrap justify-between">
    <Routine
      v-for="(e, i) in 5"
      :key="i"
      :exercises="routineExample"
      class="m-2 flex-none"
    />
  </div>
</template>

<script>
import routineExample from '../../../demo/routine.json';
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
