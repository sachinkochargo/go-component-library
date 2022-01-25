<template>
  <q-btn
    :style="{ background: styling.color, color: styling.textColor }"
    :label="label"
    @click="onClick"
    disabled="dis"
  />
</template>

<script>
import { QBtn } from "quasar";
import { GoColors } from "./../../constants/types";
export default {
  name: "Button",
  props: {
    label: String,
    dis: Boolean,
    elemType: {
      type: String,
      default: "",
    },
    onClickHandler : {
      type : Function
    }
  },
  methods: {
    onClick() {
      this.$emit("onClickHandler");
    },
  },
  computed: {
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
    QBtn,
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
