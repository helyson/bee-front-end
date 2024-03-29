import React from "react";
import { StoryBookWrapper } from "src/helper";
import { User } from "src/models/user";

import { UserList } from "./List";

export default {
  title: "User List",
  component: UserList,
};
const users: User[] = [
  {
    id: 1,
    name: "Francisco",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    id: 2,
    name: "Pedro",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    photo:
      "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    id: 3,
    name: "Maria",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photo:
      "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    id: 4,
    name: "Jorge",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    photo:
      "https://images.pexels.com/photos/247917/pexels-photo-247917.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    id: 5,
    name: "Ana",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    photo:
      "https://images.pexels.com/photos/418870/pexels-photo-418870.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    id: 6,
    name: "Felipe",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    photo:
      "https://images.pexels.com/photos/325682/pexels-photo-325682.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
];
export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UserList onRemoveUser={() => {}} users={users} />
  </StoryBookWrapper>
);
