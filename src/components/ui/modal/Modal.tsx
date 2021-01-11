import React from "react";
import { IconEnum } from "src/models/ui";
import { UISvgIcon } from "../icon/Icon";
import styles from "./Modal.module.scss";

interface ModalProps {
  title: string;
  onClose: () => void;
}

export const UIModal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.modalTitle}>
          <span className={`${styles.title} beetrack-text-graydark`}>{title}</span>
          <span className={styles.close} onClick={onClose}>
            <UISvgIcon
              name={IconEnum.Close}
              width="28"
              height="28"
              fill="#ffffff"
            />
          </span>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};
