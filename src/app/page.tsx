"use client";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import "../themes/style.css";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes/theme";
import Hero from "../components/hero";
import Steps from "../components/steps";
import Features from "../components/features";
import Information from "../components/information";
import Header from "../common/header";
const inter = Inter({ subsets: ["latin"] });
const Title = styled.h1`
  color: blue;
`;
export default function Home() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Header />
        <Hero />
        {/* <Steps />
        <Features />
        <Information /> */}
      </ThemeProvider>
    </>
  );
}
