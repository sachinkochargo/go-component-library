<template>
  <div class="q-pa-none">
    <q-table
      class="no-shadow md-table"
      style="height: 60vh"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
      hide-selected-banner
      hide-pagination
    />

    <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { QTable } from "quasar";
export default {
  name: "GoTable",
  props : {
    rows : {
      type : Array
    },
    columns : {
      type : Array
    }
  },
  components: {
    QTable,
  },
  setup() {
    return {
      selected: ref([]),
    };
  },
  // data(){
  //   return{
  //     rows,
  //     columns
  //   }
  // }
};
</script>
