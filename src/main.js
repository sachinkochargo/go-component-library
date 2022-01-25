import GoButton from "@/components/Button/Button.vue";
import GOHeader from "@/components/Header";
import GoCard from "@/components/Card";
import GoCardReview from "@/components/Card/GoCardReview";
import GoCardWrapperLayout from "@/components/Layout/GoCardWrapperLayout";
import GoTableCard from "@/components/Card/GoTableCard";
import GoCarouselWrapper from "@/components/Layout/GoCarouselWrapper";
import GoDropdownButton from "@/components/Button/GoDropdownButton.vue";
import GoAuthButton from "@/components/GoAuthButton";
import GoTable from "@/components/GoTable";

export {
  GoButton,
  GOHeader,
  GoCard,
  GoCardReview,
  GoCardWrapperLayout,
  GoTableCard,
  GoCarouselWrapper,
  GoDropdownButton,
  GoAuthButton,
  GoTable,
};

export default {
  GoButton,
  GOHeader,
  GoCard,
  GoCardReview,
  GoCardWrapperLayout,
  GoTableCard,
  GoCarouselWrapper,
  GoDropdownButton,
  GoAuthButton,
  GoTable,
  install(Vue) {
    Vue.component(
      GoButton,
      GOHeader,
      GoCard,
      GoCardReview,
      GoCardWrapperLayout,
      GoTableCard,
      GoCarouselWrapper,
      GoDropdownButton,
      GoAuthButton,
      GoTable
    );
  },
};
