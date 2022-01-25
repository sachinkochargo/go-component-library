<template>
 <div class="q-pa-md row items-start q-gutter-md">
     <slot></slot>
 </div>
</template>

<script>
export default {
  name: "GoCardWrapperLayout",
  props: {
    title: {
      type: String,
    },
    cardType: {
      type: String,
      default: "GoDefault",
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    buttonTitle: {
      type: String,
    },
  },

  methods: {
    onClick() {
      this.$emit("onClickcHandler");
    },
  },
};
</script>
