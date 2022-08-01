import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import image from './images/photo.jpg';



const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Karamo Kanagi, Ph.D
      </SectionTitle>
      <SectionText>
        Software Engineer | Researcher | Aspiring Data Scientist
      </SectionText>
      <Button onClick = {()=> window.location = '/'}> Learn More</Button>

    </LeftSection>

  

  </Section>
);

export default Hero;
