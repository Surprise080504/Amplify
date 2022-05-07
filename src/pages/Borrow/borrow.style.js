import styled from "styled-components";

export const HomeOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const BorrowTitle = styled.div`
  font-weight: 400;
  font-size: 50px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.003em;
  margin-top: 30px;
  color: #ffffff;
`;
export const LPTokenImg = styled.img`
  margin-top: 30px;
`;
export const LPTokenPart = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 70px;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const LP = styled.div`
  span {
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #a9cf83;
  }
  margin-right: 70px;
  @media screen and (max-width: 690px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;
export const Btns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 20px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const QuesImg = styled.img`
  margin-left: 35px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
export const BorrowContainer = styled.div`
  width: 650px;
  row-gap: 21px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
export const BorrowCard = styled.div`
  background: rgba(39, 111, 252, 0.48);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    row-gap: 10px;
  }
`;
export const BorrowValue = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.003em;
  margin: ${(props) =>
    props.direct === "left" ? "0 0 0 30px" : "0 30px 0 0 "};
  color: #ffffff;
  @media screen and (max-width: 450px) {
    margin: 0;
  }
`;
export const SupplyText = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.003em;
  color: #fff;
`;
