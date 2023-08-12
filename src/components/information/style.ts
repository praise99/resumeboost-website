import styled from "styled-components";
const Wrapper = styled.div`
  padding: 89px 0px;
  position: relative;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Text = styled.div`
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  color: rgba(252, 149, 112, 0.1);
  margin-right: 38px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 140px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;

export { Wrapper, FlexContainer, Text, HeaderText, Box };
