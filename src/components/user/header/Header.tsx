import React from "react";
import { UIButton } from "src/components/ui";
import { UIInput } from "src/components/ui/input/Input";
import { IconEnum, IconPositionEnum } from "src/models/ui";
import styles from "./Header.module.scss";
interface Header {
  onAdd: () => void
  onChange: (searchTerm: string) => void;
}
const UserHeader: React.FC<Header> = ({ onAdd, onChange }) => {
  return (
    <div className={styles.container}>
      <UIInput onChange={onChange} hasSearch />
      <UIButton
        onClick={onAdd}
        text="Nuevo Contacto"
        icon={IconEnum.Plus}
        iconPosition={IconPositionEnum.Left}
      />
    </div>
  );
};

export { UserHeader };
