import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRequestApi } from "src/hooks";
import { RequestEnum } from "src/models/api";
import { User } from "src/models/user";
import { setRequestApi } from "src/redux/reducers";
import { UserSelector } from "src/redux/store";
import { UserAdd } from "./add/Add";
import { UserFooter } from "./footer/Footer";
import { UserHeader } from "./header/Header";
import { UserList } from "./list/List";

const UserMain: React.FC = () => {
  const dispatch = useDispatch();
  const limit = 6;
  const { hasError } = useRequestApi();
  const { users } = useSelector(UserSelector);
  const [params, setparams] = useState({ limit, page: 1, searchTerm: "" });
  const [isVisibleAddModal, setisVisibleAddModal] = useState(false);
  useEffect(() => {
    dispatch(
      setRequestApi({
        name: RequestEnum.GetAll,
        params,
      })
    );
  }, [params]);
  const onRemoveUser = (id: number) => {
    const $params = { id };
    onPromiseAction($params, RequestEnum.Remove).then(() => {
      setparams({ limit, page: params.page, searchTerm: "" });
    });
  };
  const onAddUser = (user: User) => {
    const $params = { user };
    setisVisibleAddModal(false);
    onPromiseAction($params, RequestEnum.Add).then(() => {
      setparams({ limit, page: params.page, searchTerm: "" });
    });
  };
  const onPromiseAction = (params: any, name: RequestEnum) =>
    new Promise<void>((resolve) => {
      dispatch(
        setRequestApi({
          name,
          params,
        })
      );
      resolve();
    });

  return (
    <>
      {isVisibleAddModal && (
        <UserAdd
          onAdd={onAddUser}
          onClose={() => {
            setisVisibleAddModal(false);
          }}
        />
      )}
      <UserHeader
        onChangeText={(text) => {
          let $params = { ...params };
          $params.searchTerm = text;
          setparams($params);
        }}
        onAddUser={() => setisVisibleAddModal(true)}
      />
      <UserList users={users} onRemoveUser={onRemoveUser} />
      <UserFooter
        onChangePage={(nextPage) => {
          let $params = { ...params };
          $params.page = nextPage ? $params.page + 1 : $params.page - 1;
          setparams($params);
        }}
        hasNextPage={!!users.length&&users.length === limit}
        hasPreviewPage={params.page !== 1}
      />
    </>
  );
};

export { UserMain };
