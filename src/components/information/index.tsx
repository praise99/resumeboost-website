import { EditButton } from "app/common/button";
import React from "react";
import { Wrapper, FlexContainer, Text, HeaderText, Box } from "./style";
const Information = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Text>Software Engineering</Text>
        <Text>Digital Marketing</Text>
        <Text>Product Management</Text>
        <Text>Data Science</Text>
        <Text>Security Analysis</Text>
        <Text>Mobile Engineering</Text>
        <Text>Software Engineering</Text>
        <Text>Cyber Security</Text>
        <Text>Content Writing</Text>
        <Text>QA Testers</Text>
        <Text>Business Analysis</Text>
        <Text>Technical Writing</Text>
        <Text>Video production</Text>
      </FlexContainer>
      <Box>
        <HeaderText>
          Tailored applications <br />
          for every profession
        </HeaderText>
        <EditButton>Sign up - It’s free</EditButton>
      </Box>
    </Wrapper>
  );
};

export default Information;
