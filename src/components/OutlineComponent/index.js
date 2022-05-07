import React from "react";
import Button from "@material-ui/core/Button";
import { CusBtn } from "./btn.style";

export default function BtnContainer({
  width,
  height,
  text,
  clickFunc,
  disabled = false,
}) {
  return (
    <CusBtn width={width} height={height}>
      <Button
        variant="outlined"
        onClick={() => clickFunc()}
        disabled={disabled}
      >
        {text}
      </Button>
    </CusBtn>
  );
}
