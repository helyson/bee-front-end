import React, { CSSProperties } from "react";
import { getPath } from "./PathSvg";
import { getViewBox } from "./BoxSvg";
import { IconEnum } from "src/models/ui";

interface IconProps {
  name: IconEnum;
  style?: CSSProperties;
  fill?: string;
  viewBox?: string;
  width?: string;
  className?: string;
  height?: string;
}
const UISvgIcon: React.FC<IconProps> = ({
  name,
  style = {},
  fill = "",
  viewBox,
  width = "100%",
  className = "",
  height = "100%",
}) => {
  return (
    <>
      <svg
        data-testid="svg-element"
        width={width}
        style={style}
        height={height}
        className={className}
        viewBox={viewBox || getViewBox(name)}
      >
        {getPath(name, { fill })}
      </svg>
    </>
  );
};
export { UISvgIcon };