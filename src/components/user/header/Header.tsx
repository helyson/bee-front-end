import React from "react";
import { UIButton } from "src/components/ui";
import { UIInput } from "src/components/ui/input/Input";
import { IconEnum, IconPositionEnum } from "src/models/ui";
import styles from "./Header.module.scss";
interface Header {
  onAddUser: () => void
  onChangeText: (searchTerm: string) => void;
}
const UserHeader: React.FC<Header> = ({ onAddUser, onChangeText }) => {
  return (
    <div className={styles.container}>
      <UIInput onChange={onChangeText} hasSearch />
      <UIButton
        onClick={onAddUser}
        text="Nuevo Contacto"
        icon={IconEnum.Plus}
        iconPosition={IconPositionEnum.Left}
      />
    </div>
  );
};

export { UserHeader };
