import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  height?: string | number;
  src: string;
  width?: string | number;
}

const UIAvatar: React.FC<AvatarProps> = ({ height = 50, src, width = 50 }) => {
  return (
    <img className={styles.container} src={src} width={width} height={height} />
  );
};

export { UIAvatar };
