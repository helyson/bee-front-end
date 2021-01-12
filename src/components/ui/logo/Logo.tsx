import React from "react";
import styles from "./Logo.module.scss"

interface LogoProps {
  textLeft?: string;
  textRight?: string;
}

const UILogo: React.FC<LogoProps> = ({
  textLeft = "Test",
  textRight = "Beetrack",
}) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.text} beetrackTextGray`}>{textLeft}</span>
      <span className={`${styles.mainText} beetrack-text-graydark`}>{textRight}</span>
    </div>
  );
};

export { UILogo };
