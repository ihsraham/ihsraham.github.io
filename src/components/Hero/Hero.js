import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br />I am Maharshi
      </SectionTitle>
      <SectionText>
        Mechanical Engineering graduate. Interested in Data Analytics.
      </SectionText>
      <Button onClick={() => (window.location = "#")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
