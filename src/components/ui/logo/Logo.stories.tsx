import React from "react";
import { StoryBookWrapper } from "src/helper";

import { UILogo } from "./Logo";

export default {
  title: "UI Logo",
  component: UILogo,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UILogo />
  </StoryBookWrapper>
);
export const WithProps: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UILogo textLeft="Bee" textRight="Track" />
  </StoryBookWrapper>
);
