import React from "react";
import {
  Wrapper,
  Box,
  HeaderText,
  SubText,
  Container,
  ContainerBox,
} from "./style";
import { Data } from "./data";
import Image from "next/image";
const Steps = () => {
  return (
    <Wrapper>
      <Box>
        <HeaderText>Click, click & go!</HeaderText>
        <SubText>Designed to be effortless, and shockingly simple</SubText>
      </Box>
      <Container>
        {Data.map((item) => {
          return (
            <ContainerBox key={item.id}>
              <Image src={item.image} alt="circle" />
              <h2 className="sub-heading">{item.title}</h2>
              <p className="sub-heading-text">{item.description}</p>
            </ContainerBox>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Steps;
