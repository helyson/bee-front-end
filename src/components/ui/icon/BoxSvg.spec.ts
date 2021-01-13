import { IconEnum } from "src/models/ui";
import { getViewBox } from "./BoxSvg";

describe(" getViewBox()", () => {
  test("should be render Box plus", () => {
    const path = getViewBox(IconEnum.Plus);
    expect(path).toEqual("0 0 16 16");
  });
  test("should be render Box Close", () => {
    const path = getViewBox(IconEnum.Close);
    expect(path).toEqual("0 0 28 28");
  });
  test("should be render Box Search", () => {
    const path = getViewBox(IconEnum.Search);
    expect(path).toEqual("0 0 183.792 183.792");
  });
  test("should be render Box Back", () => {
    const path = getViewBox(IconEnum.Back);
    expect(path).toEqual("0 0 248.322 248.322");
  });
  test("should be render Box Forward", () => {
    const path = getViewBox(IconEnum.Forward);
    expect(path).toEqual("0 0 248.322 248.322");
  });
});