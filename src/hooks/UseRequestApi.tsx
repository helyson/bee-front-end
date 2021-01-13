import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestEnum, Status } from "src/models/api";
import { User } from "src/models/user";
import { setRequestApi, setUsers } from "src/redux/reducers";
import { RequestSelector } from "src/redux/store";
import { addUserService, deleteUserService, getAllUsersService } from "src/services";

const useRequestApi = (): Status => {
  const dispatch = useDispatch();
  const [hasError, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { numberRequest, name, params } = useSelector(
    RequestSelector
  );

  useEffect(() => {
    if (name !== RequestEnum.NotRequest) {
      onRequest();
    }
  }, [numberRequest]);

  const onRequest = () => {
    switch (name) {
      case RequestEnum.GetAll: {
        getAllUsersService(params)
          .then((res: User[]) => {
            dispatch(setUsers(res));
            setIsSuccess(true);
            dispatch(
              setRequestApi({
                name: RequestEnum.NotRequest,
              })
            );
          })
          .catch(() => setError(true));
        break;
      }
      case RequestEnum.Remove: {
        deleteUserService(params)
          .then(() => {
            setIsSuccess(true);
          })
          .catch(() => setError(true));
        break;
      }
      case RequestEnum.Add : {
        addUserService(params.user)
          .then((user) => {
            if(user.id){
              setIsSuccess(true);
            }
          })
          .catch(() => setError(true));
        break;
      }
    }
  };

  return { hasError, isSuccess };
};

export { useRequestApi };
