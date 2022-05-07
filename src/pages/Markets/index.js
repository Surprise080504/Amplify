import React from "react";
import { TiWarning } from "react-icons/ti";
import CustomBtn from "../../components/BtnComponent";
import MarketCard from "../../components/MarketCard";
import {
  HomeOut,
  CardContainer,
  MarketTopPart,
  TopItem,
} from "./markets.style";

export default function MarketsContainer() {
  return (
    <HomeOut>
      <MarketTopPart>
        <TopItem>
          <span>$00000.000</span>
          <br />
          Total
          <br />
          Value Locked
        </TopItem>
        <TopItem>
          <span>$00000.000</span>
          <br />
          Total
          <br />
          Supplied
        </TopItem>
        <TopItem>
          <span>$00000.000</span>
          <br />
          Total
          <br />
          Borrowed
        </TopItem>
        <TopItem>
          <span>$00000.000</span>
          <br />
          AMPL
          <br />
          Price
        </TopItem>
      </MarketTopPart>
      <CardContainer>
        {[...Array(6)].map((e, index) => (
          <MarketCard key={index} />
        ))}
      </CardContainer>
    </HomeOut>
  );
}
