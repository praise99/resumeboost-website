import React from "react";
import { Wrapper } from "./style";
import { NavLogo } from "../../assets";
import Image from "next/image";
import { EditButton } from "../button";
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <Image src={NavLogo} alt="logo" className="logo-image" />
      <Link href="https://myresumai.netlify.app">
        <EditButton>Log In</EditButton>
      </Link>
    </Wrapper>
  );
};

export default Header;
