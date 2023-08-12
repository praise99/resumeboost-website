import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  onClick?: any;
  className?: any;
  disabled?: any;
  loading?: boolean;
  color?: string;
}

const Wrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    width: 100%;
  }
  .disabled {
    opacity: 0.5;
  }
  .notDisabled {
    opacity: 1;
  }
`;
const BaseButton = styled.button`
  padding: 19px 30px;
  gap: 8px;
  height: 44px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.x16};
  width: auto;
  cursor: pointer;
  transition: background 250ms ease-in;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    width: 100%;
  }
`;
const CustomButton = ({
  onClick,
  children,
  disabled,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <Wrapper>
      <BaseButton
        className={disabled ? "disabled" : "notDisabled"}
        onClick={onClick}
        {...rest}
        disabled={disabled || loading}
      >
        {!loading && children}{" "}
        {loading && <i className="fa fa-spinner fa-spin"></i>}
      </BaseButton>
    </Wrapper>
  );
};
const EditButton = styled(CustomButton)`
  background: rgba(252, 149, 112, 0.08);
  background: rgba(252, 149, 112, 0.08);
  border-radius: 8px;
  color: #fc9570;
`;
const GoogleButton = styled(CustomButton)`
  background: #f55b23;
  border-radius: 8px;
  color: #f9fafb;
  width: 100%;
  padding-right: 70px;
  padding-left: 70px;
`;
const LoginButton = styled(CustomButton)`
  background: rgba(252, 149, 112, 0.08);
  border-radius: 8px;
  color: #ffffff;
  width: 100%;
  padding-right: 70px;
  padding-left: 70px;
  margin-top: 16px;
`;

export { CustomButton, EditButton, GoogleButton, LoginButton };
