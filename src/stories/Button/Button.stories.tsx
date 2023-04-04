import { Button } from "../../components/Button/Button";
import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
  children: "Secondary",
};
export const Danger = Template.bind({});
Danger.args = {
  buttonType: "danger",
  children: "Danger",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium",
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small",
};
export const Disabled = Template.bind({});
Disabled.args = {
  state: "disabled",
  children: "Disabled",
};
