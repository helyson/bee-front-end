import { IconEnum } from "src/models/ui";

export const getViewBox = (name: IconEnum) => {
  switch (name) {
    case IconEnum.Plus:
      return "0 0 16 16";
    case IconEnum.Close:
      return "0 0 28 28";
    case IconEnum.Search:
      return "0 0 183.792 183.792";
    case IconEnum.Back:
      return "0 0 248.322 248.322";
    case IconEnum.Forward:
      return "0 0 248.322 248.322";
    default:
      return "0 0 32 32";
  }
};
