import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!   <br/>
        I'm Imran Ahmed
      </SectionTitle>
      <SectionText>
      A designing and programming enthusiast with keen interest in React JS and Node JS. I am based in Dhaka and love to design and build exciting websites and web applications
      </SectionText>
      <Button onClick = {() => window.location = 'https://drive.google.com/file/d/1bX9NqfauHGx73eWzTjdCpxl4QQUi9xbY/view?usp=sharing' } > Personal Resume </Button>
       </LeftSection>
    
 </Section>
);

export default Hero;