import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const Default: React.VFC = () => <Button label="Default Button" />;

export const Primary: React.VFC = () => <Button label="Primary" primary />;

export const Secondary: React.VFC = () => <Button label="Secondary" />;

export const Large: React.VFC = () => <Button label="Large" size="large" />;

export const Small: React.VFC = () => <Button label="Small" size="small" />;
