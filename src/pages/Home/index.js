import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from "../../components/BtnComponent";
import OutlineBtn from "../../components/OutlineComponent";
import EarnedModal from "../../components/TigerEarnedComponent";
import { HomeOut, HomeImg, Btns, SubText, LearnMoreText } from "./home.style";

export default function HomeContainer() {
  return (
    <HomeOut>
      <HomeImg src="img/mark.png" alt="" draggable={false} />
      <Btns>
        <Link to="/markets">
          <OutlineBtn
            text="MARKETS"
            clickFunc={() => console.log("clicked!!!")}
          />
        </Link>
        <Link to="/borrow">
          <OutlineBtn
            text="BORROW"
            clickFunc={() => console.log("clicked!!!")}
          />
        </Link>
        <Link to="/lend">
          <OutlineBtn text="LEND" clickFunc={() => console.log("clicked!!!")} />
        </Link>
      </Btns>
      <SubText>
        Amplify Finance provides ecentralized lending on the Cronos Network.
      </SubText>
      <LearnMoreText>Learn More</LearnMoreText>
    </HomeOut>
  );
}
