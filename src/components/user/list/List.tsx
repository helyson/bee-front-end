import React from "react";
import { UIButton, UITable } from "src/components/ui";
import { ButtonTypeEnum, Column } from "src/models/ui";
import { User } from "src/models/user";
import { UserProfile } from "../profile/profile";

interface List {
  users: User[];
  onRemoveUser: (id: number) => void;
}

const UserList: React.FC<List> = ({ users = [], onRemoveUser }) => {
  const columns: Column<User>[] = [
    {
      key: "name",
      label: "Nombre",
      width: "30%",
      render: ({ name, photo, id }, isHover) => (
        <UserProfile name={name} avatar={photo}>
          {isHover && (
            <UIButton
              onClick={() => {
                if (id) onRemoveUser(id);
              }}
              buttonType={ButtonTypeEnum.Link}
              text="Eliminar"
            />
          )}
        </UserProfile>
      ),
    },
    {
      key: "description",
      label: "Descripcion",
      width: "70%",
      render: ({ description }) => <span>{description}</span>,
    },
  ];
  return <UITable data={users} columns={columns} />;
};

export { UserList };
