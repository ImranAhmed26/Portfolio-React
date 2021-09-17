import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi,   <br/>
        I am Imran Ahmed
      </SectionTitle>
      <SectionText>
      An electrical and designing enthusiast with the vision to pursue 
      an aspiring and challenging post where I can reach my full potential and 
      contribute to the growth of the company.
      </SectionText>
      <Button onClick = {() => window.location = 'https://drive.google.com/file/d/1bX9NqfauHGx73eWzTjdCpxl4QQUi9xbY/view?usp=sharing'} > Personal Resume </Button>
       </LeftSection>
    
 </Section>
);

export default Hero;