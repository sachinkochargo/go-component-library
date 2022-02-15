import GoButton from "@/components/Button/GoButton.vue";
import GoCard from "@/components/Card";
import GoCardReview from "@/components/Card/GoCardReview";
import GoCardWrapperLayout from "@/components/Layout/GoCardWrapperLayout";
import GoTableCard from "@/components/Card/GoTableCard";
import GoCarouselWrapper from "@/components/Layout/GoCarouselWrapper";
import GoDropdownButton from "@/components/Button/GoDropdownButton.vue";
import GoAuthButton from "@/components/GoAuthButton";
import GoTable from "@/components/GoTable";
import GoTopBar from "@/components/GoTopBar";
import Quasar from 'quasar';
export {
  GoButton,
  GoCard,
  GoCardReview,
  GoCardWrapperLayout,
  GoTableCard,
  GoCarouselWrapper,
  GoDropdownButton,
  GoAuthButton,
  GoTable,
  GoTopBar
};

export default {
  GoButton,
  GoCard,
  GoCardReview,
  GoCardWrapperLayout,
  GoTableCard,
  GoCarouselWrapper,
  GoDropdownButton,
  GoAuthButton,
  GoTable,
  GoTopBar,
  install(Vue) {
    Vue.use(Quasar)
    Vue.component(
      GoButton,
      GoCard,
      GoCardReview,
      GoCardWrapperLayout,
      GoTableCard,
      GoCarouselWrapper,
      GoDropdownButton,
      GoAuthButton,
      GoTable,
      GoTopBar
    );
  },
};
