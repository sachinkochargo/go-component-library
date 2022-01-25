<template>
  <q-btn-dropdown
    split
    to="/start/pick-quasar-flavour"
    :style="{ background: styling.color, color: styling.textColor }"
    :label="label"
  >
    <q-list>
      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Photos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Videos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Articles</q-item-label>
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
    dis: String,
    elemType: {
      type: String,
      default: "",
    },
    filters: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClick() {
      this.$emit("onClickcHandler");
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
    console.log("props button", props.filters);
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  color: 40px 0 0;
}
</style>
