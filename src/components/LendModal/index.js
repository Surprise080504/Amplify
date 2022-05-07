import React, { useState } from "react";
import CustomBtn from "../BtnComponent";
import OutBtn from "../OutlineComponent";
import {
  ZapModal,
  ZapModalBody,
  CloseBtn,
  ZapBack,
  ModalLine,
  CusInput,
  CusinputOut,
  BalanceLabel,
  RightLabel,
} from "./confirm.style";
import { MdClose } from "react-icons/md";

export default function ConfirmContainer({ visible, closeFunc, value }) {
  const [val, setval] = useState(0);
  return (
    <>
      {visible && (
        <ZapModal>
          <ZapModalBody>
            <CloseBtn>
              <MdClose
                onClick={() => closeFunc(false)}
                className="closeclass"
              />
            </CloseBtn>
            <ModalLine mt="20px">
              <CusInput
                type="number"
                value={val}
                onChange={(e) => setval(e.target.value)}
              />
              <RightLabel onClick={() => setval(value)}>MAX</RightLabel>
            </ModalLine>
            <ModalLine mt="35px">
              <BalanceLabel>Balance:</BalanceLabel>
              <RightLabel>{`$${value}`}</RightLabel>
            </ModalLine>
          </ZapModalBody>
          <ZapBack onClick={() => closeFunc(false)} />
        </ZapModal>
      )}
    </>
  );
}
