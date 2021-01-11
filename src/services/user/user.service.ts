import { User } from "src/models/user";

const baseUrl = "/api/users";
interface ParamsUser {
  page: number;
  limit: number;
  searchTerm: string;
}
const getAllUsersService = async ({
  limit,
  page,
  searchTerm = "",
}: ParamsUser): Promise<User[]> => {
  try {
    const res = await fetch(
      `${baseUrl}?_page=${page}&_limit=${limit}&q=${searchTerm}`,
      {
        method: "get",
      }
    );
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUserService = (params: { id: number }) => {
  const headers = new Headers();
  headers.set("Content-type", "application/json");
  const request = {
    method: "DELETE",
    headers: headers,
  };
  return fetch(`${baseUrl}/${params.id}`, request)
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    });
};

const addUserService = ({ name, photo, description }: User): Promise<User> => {
  const headers = new Headers();
  headers.set("Content-type", "application/json");
  const request = {
    method: "POST",
    body: JSON.stringify({ name, photo, description }),
    headers: headers,
  };

  return fetch(`${baseUrl}`, request)
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    });
};

export { getAllUsersService, deleteUserService, addUserService };
