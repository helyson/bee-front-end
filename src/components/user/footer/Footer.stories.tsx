import React from "react";
import { StoryBookWrapper } from "src/helper";

import { UserFooter } from "./Footer";

export default {
  title: "User Footer Pagination ",
  component: UserFooter,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <UserFooter onChangePage={() => {}} hasNextPage hasPreviewPage />
  </StoryBookWrapper>
);
