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
export const LPTokenPart = styled.div`
  margin-top: 70px;
  overflow-x: auto;
  width: 100%;
`;
export const Btns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 13px;
  margin-left: 50px;
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
export const LPMain = styled.div`
  @media screen and (max-width: 710px) {
    width: 705px;
  }
`;
export const Textline = styled.div`
  display: flex;
  column-gap: 50px;
`;
export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const SecLine = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
export const TokenText = styled.div`
  width: ${(props) => props.width};
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  color: #a9cf83;
`;
export const TokenDiv = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
`;
export const Circle = styled.div`
  width: 52px;
  height: 52px;
  background: #25befa;
  border-radius: 50%;
`;
export const BalText = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  margin-left: 50px;
  text-align: center;
  letter-spacing: 0.003em;
  width: 120px;
  color: #ffffff;
`;
