import React from "react";
import { UIAvatar } from "./Avatar";

export default {
  title: "UI Avatar",
  component: UIAvatar,
};

export const Basic: React.VFC<{}> = () => (
  <UIAvatar src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb" />
);
export const AvatarSize: React.VFC<{}> = () => (
  <UIAvatar
    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb"
    size="150"
  />
);
