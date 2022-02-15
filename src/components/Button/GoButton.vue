<template>
  <q-btn
    :style="{ background: styling.color, color: styling.textColor }"
    :label="label"
    @click="onClick"
    :disabled="dis"
    :class="styling.color"
  />
</template>

<script>
import { QBtn } from "quasar";
import { GoTypes } from "./../../constants/types";
export default {
  name: "GoButton",
  props: {
    label: String,
    dis: Boolean,
    onClickHandler: {
      type: Function,
    },
    primary: {
      type: Boolean,
      required : false 
    },
    secondary: {
      type: Boolean,
      required : false 
    },
    onClickHandler : {
      type : Function,
      default : function(){ alert('here !!') }
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
        const colorProps = GoTypes(this);
        return {
          color: colorProps,
        };
      },
    },
  },
  components: {
    QBtn,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
