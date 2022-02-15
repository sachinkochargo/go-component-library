<template>
  <div class="q-pa-none">
    <q-table
      class="no-shadow md-table"
      style="height: 60vh"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="selectedRef"
      hide-selected-banner
      hide-pagination
      @row-click="rowClick"
    />

    <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
  </div>
</template>

<script>
import { QTable } from "quasar";
export default {
  name: "GoTable",
  props: {
    rows: {
      type: Array,
    },
    columns: {
      type: Array,
    },
    rowClick: {
      type: Function
    },
    selectedRef: {
      type: HTMLDivElement,
    },
  },
  components: {
    QTable,
  },

};
</script>
