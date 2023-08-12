import React from "react";
import { Wrapper, Box, FlexContainer, FlexItem1, FlexItem2 } from "./style";

const Features = () => {
  return (
    <Wrapper>
      <Box>
        <h1 className="heading">Stand out from the crowd</h1>
        <FlexContainer>
          <FlexItem2>
            <h1 className="header">Cover letters tailored to each job</h1>
            <p className="text">
              Stand out from the competition as we help tailor your cover letter
              to the company and job you are applying for.
            </p>
          </FlexItem2>
          <FlexItem1>
            <h1 className="header">Clear, concise, and impactful </h1>
            <p className="text">
              Craft an application that exudes professionalism and
              appropriateness, utilizing language that is tailored to the job
              and industry requirements.
            </p>
          </FlexItem1>
        </FlexContainer>
        <FlexContainer>
          <FlexItem1>
            <h1 className="header">Effortlessly saves time</h1>
            <p className="text">
              With our user-friendly product, you can complete your application
              quickly and efficiently, freeing up more time for the things you
              enjoy.
            </p>
          </FlexItem1>
          <FlexItem2>
            <h1 className="header">
              Customization options to reflect your personal style
            </h1>
            <p className="text">
              Our product makes it easy to showcase your personality and
              creativity while maintaining a professional and polished
              appearance.
            </p>
          </FlexItem2>
        </FlexContainer>
      </Box>
    </Wrapper>
  );
};

export default Features;
