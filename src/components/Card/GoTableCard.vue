<template>
  <q-card flat bordered class="my-card">
    <q-card-section
      :style="{ background: styling.background, color: styling.textColor }"
      :class="styling.color"
    >
      <div class="q-pr-xs">
        <span class="q-pr-xs">{{ title }}</span>
        <span v-if="this.tableStatsData">
          <span v-for="(itm, index) in tableStatsData" v-bind:key="itm.key"
            >{{ itm.name }} : {{ itm.value }}
            <span v-if="index < tableStatsData.length - 1"> | </span>
          </span>
        </span>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="q-pa-none">
      <GoTable
        :rows="rows"
        :columns="columns"
        :rowKey="rowKey"
        :rowClick="onClick"
        :selectedRef="selectedRef"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { QCard, QCardSection, QSeparator } from "quasar";
import GoTable from "./../GoTable";
import { GoTypes } from "../../constants/types";
export default {
  name: "GoTableCard",
  props: {
    title: {
      type: String,
    },
    cardType: {
      type: String,
      default: "GoDefault",
    },
    tableStatsData: {
      type: Array,
    },
    rows: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    rowClick: {
      type: Function,
      // default : (row, i, data) => {  }
    },
    selectedRef: {
      type: HTMLDivElement,
      // default: ref([]),
    },
    primary: {
      type: Boolean,
    },
    secondary: {
      type: Boolean,
    },
  },
  components: {
    QCard,
    QCardSection,
    QSeparator,
    GoTable,
  },
  computed: {
    styling: {
      get() {
        const className = GoTypes(this);
        return {
          color: className,
        };
      },
    },
  },
  methods: {
    onClick: function (row, i, data) {
      this.$emit("rowClick", row, i, data);
    },
  },
};
</script>
