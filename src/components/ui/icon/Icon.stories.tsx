import React from "react";
import { StoryBookWrapper } from "src/helper";
import { IconEnum } from "src/models/ui";

import { UISvgIcon } from "./Icon";

export default {
  title: "UI Icon",
  component: UISvgIcon,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UISvgIcon name={IconEnum.Search} width="32" height="32" />
  </StoryBookWrapper>
);
export const IconWithFill: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UISvgIcon name={IconEnum.Close} width="28" height="28" fill="#ffffff" />
  </StoryBookWrapper>
);
export const IconWithClassName: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UISvgIcon
      name={IconEnum.Forward}
      width="16"
      height="16"
      className="beetrack-fill-primary"
    />
  </StoryBookWrapper>
);
