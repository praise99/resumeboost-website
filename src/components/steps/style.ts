import styled from "styled-components";
const Wrapper = styled.div`
  padding-top: 167px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  color: #ffffff;
`;
const SubText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #d1d5db;
  padding: 18px 0px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 160px;
`;
const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 318px;
  :nth-child(2) {
    margin: 0px 30px;
  }
  .sub-heading {
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    padding-top: 55px;
    padding-bottom: 15px;
  }
  .sub-heading-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #d1d5db;
  }
`;
export { Wrapper, Box, HeaderText, SubText, Container, ContainerBox };
