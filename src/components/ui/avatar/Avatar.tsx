import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  size?: string | number;
}

const UIAvatar: React.FC<AvatarProps> = ({ src, size = 50 }) => {
  return (
    <img
      className={styles.container}
      src={src}
      width={size}
      height={size}
      data-testid="image-element"
      alt="avatar"
    />
  );
};

export { UIAvatar };
