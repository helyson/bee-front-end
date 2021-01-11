import { StoryBookWrapper } from "../../../helper";
import React from "react";
import { UILogo } from "./Logo";

export default {
  title: "Logo",
  component: UILogo,
};

export const Primary: React.VFC<{}> = () => <StoryBookWrapper><UILogo /></StoryBookWrapper>
