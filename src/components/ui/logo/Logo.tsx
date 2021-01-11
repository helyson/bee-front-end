import React from "react";
import styles from "./Logo.module.scss"

interface LogoProps {
  text?: string;
  company?: string;
}

const UILogo: React.FC<LogoProps> = ({
  text = "Test",
  company = "Beetrack",
}) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.text} beetrack-text-gray`}>{text}</span>
      <span className={`${styles.mainText} beetrack-text-graydark`}>{company}</span>
    </div>
  );
};

export { UILogo };
