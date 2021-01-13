import React from "react";
import { StoryBookWrapper } from "src/helper";
import { User } from "src/models/user";

import { UserAdd } from "./Add";

export default {
  title: "User Add",
  component: UserAdd,
};

const user: User = {
  name: "Juan Viloria",
  description: "Descripcion de usuario",
  photo:
    "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb",
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UserAdd onAdd={() => {}} onClose={() => {}} isStory />
  </StoryBookWrapper>
);

export const UserUpdate: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UserAdd title={"Editar Contacto"} onAdd={() => {}} onClose={() => {}}  user={user} isStory />
  </StoryBookWrapper>
);
