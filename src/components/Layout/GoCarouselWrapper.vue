<template>
  <q-carousel
    navigation-position="top"
    v-model="slide"
    @mouseenter="showNav = true"
    @mouseleave="showNav = false"
    :navigation="showNav"
    :arrows="showNav"
    height="height"
    control-color="secondary"
    class="bg-white text-grey-9 overflow-hidden"
  >
    <slot></slot>
  </q-carousel>
</template>

<script>
import { QCarousel } from 'quasar';
export default {
  name: "GoCarouselWrapper",
  props: {
   height : {
       type : String,
       default : "30%"
   }
  },
  data() {
    return {
      expanded: true,
      slide: "orders",
      showNav: false,
    };
  },
  methods: {
    onClick() {
      this.$emit("onClickcHandler");
    },
  },
  components : {
      QCarousel
  }
};
</script>
