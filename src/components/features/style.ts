import styled from "styled-components";
import backgroundImage from "../../../public/background.svg";
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  height: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
const Box = styled.div`
  width: 100%;
  padding: 72px 120px;
  .heading {
    font-weight: 800;
    font-size: 48px;
    line-height: 60px;
    color: #1c1c1c;
    text-align: center;
    margin-bottom: 80px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexItem = styled.div`
  background-color: #ffffff;
  background: #f2f1ed;
  border-radius: 20px;
  height: 400px;
  margin-bottom: 20px;

  :first-child {
    margin-right: 20px;
  }
  .header {
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }
  .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.7);
    padding-top: 16px;
  }
`;

const FlexItem1 = styled(FlexItem)`
  width: 40%;
  padding: 52px 32px;
`;

const FlexItem2 = styled(FlexItem)`
  width: 60%;
  padding: 52px 41px;
`;

export { Wrapper, Box, FlexContainer, FlexItem1, FlexItem2 };
