// Button.stories.js

import GoAuthButton from './index.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'GoAuthButton',
  component: GoAuthButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { GoAuthButton },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<GoAuthButton v-bind="args" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  elemType: "",
  label: 'Button',
  dis : "false"
};