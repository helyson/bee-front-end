import React, { CSSProperties } from "react";
import {
  ButtonTypeEnum,
  ButtonVarianEnum,
  IconEnum,
  IconPositionEnum,
} from "src/models/ui";
import { UISvgIcon } from "../icon/Icon";
import styles from "./Button.module.scss";

interface ButtonProps {
  buttonType?: ButtonTypeEnum;
  extraStyle?: CSSProperties;
  heightIcon?: string;
  icon?: IconEnum;
  iconPosition?: IconPositionEnum;
  isDisabled?: boolean;
  testId?: string;
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  variant?: ButtonVarianEnum;
  widthIcon?: string;
  onClick?: () => void;
}

const UIButton: React.FC<ButtonProps> = ({
  buttonType = ButtonTypeEnum.Button,
  extraStyle = {},
  heightIcon = "16",
  icon,
  iconPosition = IconPositionEnum.Right,
  isDisabled = false,
  testId = "button-element",
  text,
  type="button",
  variant = ButtonVarianEnum.Primary,
  widthIcon = "16",
  onClick = () => {},
}) => {
  return (
    <button
      className={`beetrack-${buttonType}-${variant} ${styles.container}`}
      style={extraStyle}
      type={type}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      disabled={isDisabled}
      data-testid={testId}
    >
      <span>{text}</span>
      {!!icon && (
        <span className={icon ? styles[iconPosition] : ""}>
          <UISvgIcon name={icon} width={widthIcon} height={heightIcon} />
        </span>
      )}
    </button>
  );
};

export { UIButton };
