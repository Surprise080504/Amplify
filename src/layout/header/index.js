import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeaderOut,
  Header,
  Left,
  Right,
  WalletImg,
  Tabs,
  HeaderTab,
} from "./header.style";

export default function HeaderContainer() {
  const location = useLocation();
  const [active, setActive] = useState(0);
  const ChangeActive = (e) => {
    setActive(e);
  };
  return (
    <HeaderOut>
      <Header>
        <Link to="/">
          <Left>AMPLIFY</Left>
        </Link>
        <Right>
          <WalletImg src="img/non_connect.png" alt="" draggable={false} />
          CONNECT
        </Right>
      </Header>
      {location.pathname !== "/" && (
        <Tabs>
          <Link to="/markets">
            <HeaderTab
              active={active === 0 && true}
              onClick={() => ChangeActive(0)}
            >
              Markets
            </HeaderTab>
          </Link>
          <Link to="/borrow">
            <HeaderTab
              active={active === 1 && true}
              onClick={() => ChangeActive(1)}
            >
              Borrow
            </HeaderTab>
          </Link>
          <Link to="/lend">
            <HeaderTab
              active={active === 2 && true}
              onClick={() => ChangeActive(2)}
            >
              Lend
            </HeaderTab>
          </Link>
        </Tabs>
      )}
    </HeaderOut>
  );
}
