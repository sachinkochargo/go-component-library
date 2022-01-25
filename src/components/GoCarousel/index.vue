<template>
  <div>
    <template>
      <q-btn
        class="q-mb-xl"
        v-if="active"
        size="xs"
        icon="circle"
        color="secondary"
        flat
        round
        dense
        @click="onClick"
      />
      <q-btn
        class=""
        v-else
        size="xs"
        :icon="btnProps.icon"
        color="grey-5"
        flat
        round
        dense
        @click="onClick"
      />
    </template>

    <q-carousel-slide name="orders" class="q-pa-none">
      <q-card-section class="full-width" v-if="data && data.charts" horizontal>
        <q-card
          v-for="(chart, index) in data.charts"
          :key="index"
          class="q-pa-none width-33"
          flat
        >
          <q-card-section class="q-pa-sm">
            <chart-box :data="chart" />
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-carousel-slide>
  </div>
</template>

<script>
import { QButton, QCarouselSlide } from "quasar";
import { GoTypes } from "../../constants/types";

export default {
  name: "GoCard",
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    cardType: {
      type: String,
      default: "GoDefault",
    },
  },
  components: {
    // QButton,
    QCarouselSlide,
  },
  setup(props) {
    console.log(props);
  },
  computed: {
    styling: {
      get() {
        return {
          background: GoTypes(this.cardType).backgroundColor,
        };
      },
    },
  },
};
</script>
