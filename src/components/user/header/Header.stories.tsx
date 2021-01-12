import React from "react";
import { StoryBookWrapper } from "src/helper";

import { UserHeader } from "./Header";

export default {
  title: "User Header",
  component: UserHeader,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UserHeader onChangeText={() => {}} onAddUser={()=> {}}/>
  </StoryBookWrapper>
);
