import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text1:'', text: 'Projects compeleted using React, JavaScript, CSS and Bootstrap'},
  { number: 3, text: 'Certificates on React, Web Developement and front-end UI Frame work ', },
  { number: 16, text: 'Months of volunteering under IEEE AIUB Student Branch', },
  
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index)=>(
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
