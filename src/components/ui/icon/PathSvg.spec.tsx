
import { IconEnum } from "src/models/ui";
import { getPath } from "./PathSvg";

describe(" getViewBox()", () => {
  test("should be render path Back", () => {
    const path = getPath(IconEnum.Back, "");
    expect(path).toMatchSnapshot();
  });
  test("should be render path Close", () => {
    const path = getPath(IconEnum.Close, "");
    expect(path).toMatchSnapshot();
  });
  test("should be render path Forward", () => {
    const path = getPath(IconEnum.Forward, "");
    expect(path).toMatchSnapshot();
  });
  test("should be render path Plus", () => {
    const path = getPath(IconEnum.Plus, "");
    expect(path).toMatchSnapshot();
  });
  test("should be render path Search", () => {
    const path = getPath(IconEnum.Search, "");
    expect(path).toMatchSnapshot();
  });
});