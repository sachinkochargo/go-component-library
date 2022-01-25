<template>
  <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

    <q-card-section :style="{'background' : styling.background, 'color' : styling.textColor}">
      <q-btn
        fab
        color="primary"
        icon="place"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ title }}
        </div>
      </div>

      <q-rating v-model="stars" :max="5" size="32px" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ subtitle }}
      </div>
      <div class="text-caption text-grey">
        {{ description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="event" />
      <q-btn flat color="primary" @click="onClick"> {{ buttonTitle }} </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {
  QCard,
  QCardSection,
  QSeparator,
  QRating,
  QCardActions,
  QImg,
  QBtn,
} from "quasar";
import { GoTypes } from "../../constants/types";

export default {
  name: "GoCardReview",
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
  components: {
    QCard,
    QCardSection,
    QSeparator,
    QRating,
    QCardActions,
    QImg,
    QBtn,
  },
  setup(props) {
    console.log(props);
  },
  computed: {
    styling: {
      get() {
        return {
          background: GoTypes(this.cardType).backgroundColor,
          textColor : GoTypes(this.cardType).textColor
        };
      },
    },
  },
  methods: {
    onClick() {
      this.$emit("onClickcHandler");
    },
  },
};
</script>
