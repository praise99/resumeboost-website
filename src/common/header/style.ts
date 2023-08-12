import styled from "styled-components";
const Wrapper = styled.div`
  height: 80px;
  background: #1c1c1c;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 20px 24px;
  }
  .logo-image {
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      width: 50%;
    }
  }
`;
export { Wrapper };
