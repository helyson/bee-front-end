import React from "react";

import { UserProfile } from "./profile";

export default {
  title: "User Profile",
  component: UserProfile,
};

export const Basic: React.VFC<{}> = () => (
  <UserProfile
    name="Maria Lourdes"
    avatar="https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?h=350&auto=compress&cs=tinysrgb"
  />
);
