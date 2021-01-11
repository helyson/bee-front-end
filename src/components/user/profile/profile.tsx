import React from "react";
import { UIAvatar } from "src/components/ui";
import styles from "./profile.module.scss";

interface ProfileProps {
  name: string;
  avatar: string;
}
const UserProfile: React.FC<ProfileProps> = ({ name, avatar, children }) => {
  return (
    <div className={styles.container}>
      <UIAvatar src={avatar} />
      <div className={styles.information}>
        <span className={styles.name}>{name}</span>
        {children}
      </div>
    </div>
  );
};

export { UserProfile };
