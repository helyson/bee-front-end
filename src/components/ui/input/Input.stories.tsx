import React from "react";
import { StoryBookWrapper } from "src/helper";

import { UIInput } from "./Input";

export default {
  title: "UI Input",
  component: UIInput,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UIInput onChange={() => {}} placeHolder="ingrese un texto" />
  </StoryBookWrapper>
);
export const InputSearch: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UIInput onChange={() => {}} hasSearch />
  </StoryBookWrapper>
);
