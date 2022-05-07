import React from "react";
import Button from "@material-ui/core/Button";
import { CusBtn } from "./btn.style";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";

export default function BtnContainer({ text, clickFunc, disabled = false }) {
  return (
    <CusBtn>
      <Button
        variant="contained"
        color="primary"
        onClick={() => clickFunc()}
        disabled={disabled}
      >
        {text}
      </Button>
    </CusBtn>
  );
}
