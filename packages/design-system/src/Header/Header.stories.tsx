import { Meta } from "@storybook/react";
import React from "react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
} as Meta;

export const Default: React.VFC = () => <Header  />;

export const Loading: React.VFC = () => <Header loading />;
