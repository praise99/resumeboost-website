import styled from "styled-components";

const Wrapper = styled.div`
  height: auto;
  height: 100%;
  a {
    text-decoration: none;
  }
  span {
    color: #ffb45c;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 110px;
  position: relative;
  margin-bottom: 118px;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 0px 16px;
    padding-top: 70px;
    margin-bottom: 0px;
  }
`;
const HeaderText = styled.h1`
  font-weight: 800;
  display: inline;
  font-size: 64px;
  line-height: 80px;
  font-family: "Athletics";
  text-align: center;
  color: #ffffff;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    font-size: 36px;
    line-height: 45px;
    text-transform: capitalize;
  }
`;
const SubText = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: #d1d5db;
  padding: 32px 0px;
  width: 58%;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    font-size: 16px;
    line-height: 20px;
    padding: 16px 0px;
    width: 100%;
  }
`;
const ImageBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .highlight-image {
    position: absolute;
    z-index: -10;
    width: 100%;
  }
  .image {
    position: absolute;
    top: 50px;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      top: -40px;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    margin-top: 0px;
  }
`;
const ManBox = styled.div`
  position: absolute;
  left: 12%;
  top: 60px;
  .image {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    display: none;
  }
`;
const WomanBox = styled.div`
  position: absolute;
  right: 10%;
  top: 150px;
  .image {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    display: none;
  }
`;
export { Wrapper, HeaderText, SubText, Box, ImageBox, WomanBox, ManBox };
