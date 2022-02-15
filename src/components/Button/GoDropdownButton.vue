<template>
  <q-btn-dropdown
    split
    :style="{ background: styling.color, color: styling.textColor }"
    :label="label"
  >
    <q-list v-if="this.dropdownData">
      <q-item clickable v-for=" (item, index) in dropdownData" v-bind:key="index" @click="onClick(item)">
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { QBtnDropdown, QList, QItem, QItemSection } from "quasar";
import { GoColors } from "./../../constants/types";
export default {
  name: "GoDropdownButton",
  props: {
    label: String,
    elemType: {
      type: String,
      default: "",
    },
    dropdownData: {
      type: Array,
      default: () => [],
    },
    primary : {
      type : Boolean
    },
    secondary : {
      type : Boolean
    }
  },
  methods: {
    onClick(item) {
      this.$emit("onClickcHandler", item);
    },
  },
  computed: {
    isDisabled() {
      console.log("dis", this.dis);
      return this.dis === "true" ? true : false;
    },
    styling: {
      get() {
        const colorProps = GoColors(this.elemType);
        return {
          color: colorProps.color,
          textColor: colorProps.textColor,
        };
      },
    },
  },
  components: {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
  },
  setup(props) {
    console.log("props dropdownData", props.dropdownData);
  },
};
</script>
