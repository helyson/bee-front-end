import React from "react";
import { UIButton } from "src/components/ui";
import {
  IconEnum,
  IconPositionEnum,
  ButtonTypeEnum,
  ButtonVarianEnum,
} from "src/models/ui";
import styles from "./Footer.module.scss";

interface footer {
  onChangePage: (nextPage: boolean) => void;
  hasNextPage: boolean;
  hasPreviewPage: boolean;
}

const UserFooter: React.FC<footer> = ({
  hasNextPage,
  hasPreviewPage,
  onChangePage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {hasPreviewPage && (
          <UIButton
            onClick={() => {
              onChangePage(false);
            }}
            buttonType={ButtonTypeEnum.TextIcon}
            icon={IconEnum.Back}
            text="Página anterior"
            variant={ButtonVarianEnum.Gray}
            iconPosition={IconPositionEnum.Left}
          />
        )}
        {hasNextPage && (
          <UIButton
            onClick={() => {
              onChangePage(true);
            }}
            buttonType={ButtonTypeEnum.TextIcon}
            icon={IconEnum.Forward}
            text="Siguiente página"
            variant={ButtonVarianEnum.Gray}
          />
        )}
      </div>
    </div>
  );
};

export { UserFooter };
