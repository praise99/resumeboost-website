import { CustomButton } from "app/common/button";
import {
  Wrapper,
  HeaderText,
  SubText,
  Box,
  ImageBox,
  WomanBox,
  ManBox,
} from "./style";
import { BgImage, HeroImg, Man, Woman } from "../../assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import ReactTyped from "react-typed";
const Hero = () => {
  return (
    <Wrapper>
      <Box>
        <ManBox>
          <Image src={Man} alt="hero-image" />
        </ManBox>
        <HeaderText>
          Polish your applications, <br />
          get noticed by{" "}
          <ReactTyped
            loop
            typeSpeed={80}
            backSpeed={40}
            strings={["employers", "recruiters", "hiring managers"]}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
          {/* get noticed by employers */}
        </HeaderText>
        <WomanBox>
          <Image src={Woman} alt="hero-image" />
        </WomanBox>
        <SubText>
          Put your best foot forward with a compelling cover letter and resume
          that proves you&apos;re the right candidate for your applied role
        </SubText>
        <Link href="https://resumeboostai.netlify.app/signup">
          <CustomButton>Sign up - It’s free</CustomButton>
        </Link>
      </Box>

      <ImageBox>
        <Image
          src={BgImage}
          alt="highlight-image"
          className="highlight-image"
        />
        <Image src={HeroImg} alt="bg-image" className="image" />
      </ImageBox>
    </Wrapper>
  );
};

export default Hero;
