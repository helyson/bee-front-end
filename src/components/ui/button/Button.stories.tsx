import { ButtonTypeEnum, ButtonVarianEnum, IconEnum, IconPositionEnum } from "src/models/ui";
import React from "react";
import { StoryBookWrapper } from "src/helper";
import { UIButton } from "./Button";

export default {
  title: "UI Button",
  component: UIButton,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UIButton text="Guardar" />
  </StoryBookWrapper>
);

export const ButtonLink: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UIButton
      onClick={() => {
        console.log("on click element");
      }}
      buttonType={ButtonTypeEnum.Link}
      text="Eliminar"
    />
  </StoryBookWrapper>
);

export const ButtonTextIcon: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UIButton
      buttonType={ButtonTypeEnum.TextIcon}
      icon={IconEnum.Back}
      text="Página anterior"
      variant={ButtonVarianEnum.Gray}
      iconPosition={IconPositionEnum.Left}
    />
  </StoryBookWrapper>
);
