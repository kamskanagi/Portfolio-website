import React from 'react';
import styled from 'styled-components';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection} from './HeroStyles';
//import image from './images/photo.jpg';


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

    <RightSection>
      <div className= "col-2">
        <img className="object-cover object-center rounded image-responsive" src="images/pic.jpg" />
     </div>
        
    </RightSection>
    
  </Section>


);

// const styles = styled.create({
//   image: {
//     width: 150,
//     height: 150,
//     borderWidth: 2,
//     borderRadius: 75
//   },
// });

export default Hero;
