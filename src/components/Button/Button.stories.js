// Button.stories.js

import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    
    return { onClickHandler : onClick ,...args };
  },
  methods : {
    onClick : () => {
      alert('here!!')
    }
  }
  template: '<Button v-bind="args" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  elemType: "",
  label: 'Button',
  dis : Boolean(false),
  onClickHandler : () => { alert('hello') }
};