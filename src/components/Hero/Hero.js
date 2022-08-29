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
      A programming enthusiast in love with JavaScrip. Based in Dhaka currently I am employed as a Jr. Fullstack Developer and developing web applications using the MERN Stack.
      </SectionText>
      <Button onClick = {() => window.location = 'https://drive.google.com/file/d/1SvffbMCVBqSVoW7NvzeSlDcylOFUmbyw/view?usp=sharing' } > Resume </Button>
       </LeftSection>
    
 </Section>
);

export default Hero;
