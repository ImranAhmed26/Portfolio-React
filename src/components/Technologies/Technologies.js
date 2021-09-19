import React from 'react';
import { DiAtom, DiCode, DiFirebase, DiGoogleAnalytics, DiJavascript, DiOnedrive, DiPhotoshop, DiReact, DiTerminal, DiWindows, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
 <SectionDivider/>
 <br/>
 <br/>

 <SectionTitle>Technologies</SectionTitle>
 <SectionText>
   I've worked with a range of Technologies in the web developement world mostly related to the front-end
 </SectionText>
 <List>
   <ListItem>
     <DiReact size="3rem"/>
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
            <br/>
           React.JS  <br/>
           JavaScript  <br/>
           CSS   <br/>
           Bootstrap
         </ListParagraph>
       </ListContainer>
   </ListItem>

   <ListItem>
     <DiPhotoshop size="3rem"/>
       <ListContainer>
         <ListTitle>Graphics and Text</ListTitle>
         <ListParagraph>
            <br/>
           Adobe Photoshob <br/>
           Adobe Illustrator <br/>
           MS Powerpoint<br/>
           MS Word<br/>
           MS Excel
         </ListParagraph>
       </ListContainer>
   </ListItem>

   <ListItem>
     <DiGoogleAnalytics size="3rem"/>
       <ListContainer>
         <ListTitle>Simulation and Engineering</ListTitle>
         <ListParagraph>
           <br/>
           Proteus <br/>
           MATLAB & Simulink <br/>
           Multisim<br/>
         </ListParagraph>
       </ListContainer>
   </ListItem>
 </List>
 
 
</Section>
);

export default Technologies;
