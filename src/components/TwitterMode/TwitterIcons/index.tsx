/* eslint-disable react/no-unknown-property */
import React from "react";
import { Svg } from "./styles";

interface Props{
  viewBox?: string;
  width: string;
  height: string;
  fill: string;
  d: string;
}

export default function Icon({ fill, height, viewBox, width, d}:Props){
  return (
    <Svg
      viewBox={viewBox || "0 0 24 24"}
      width={width}
      height={height}
      fill={fill}
    >
      <g>
        <path d={d}></path>
      </g>
    </Svg>
  )
}

