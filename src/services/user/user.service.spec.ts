import { User } from "src/models/user";
import { addUserService, deleteUserService, getAllUsersService } from "./user.service";

describe("userServices ", () => {
  test("should be call getAllUsers", () => {
    getAllUsersService({ limit: 3, page: 1, searchTerm: "" }).then((users) => {
      expect(users).toEqual([]);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  test("should be call addUser", () => {
    const newUser: User = {
      name: "Juan Viloria",
      description: "Descripcion de usuario",
      photo:
        "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb",
    };
    addUserService(newUser).then((user) => {
      expect(user.id).toEqual(1);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  test("should be call getDeleteUsers", () => {
    deleteUserService({id: 1}).then((res) => {
      expect(res).toEqual({});
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
