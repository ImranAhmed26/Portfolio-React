import React from 'react';
import { DiGoogleAnalytics, DiPhotoshop, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
 <SectionDivider/>
 <br/>
 <br/>

 <SectionTitle>Technologies</SectionTitle>
 <SectionText>
   I've worked with a range of Technologies in the web developement sector mostly using the MERN Stack.
 </SectionText>
 <List>
 
 <ListItem>
     <DiGoogleAnalytics size="3rem"/>
       <ListContainer>
         <ListTitle>Back-End </ListTitle>
         <ListParagraph>
           <br/>
           Node JS <br/>
           Express <br/>
           Mongoose<br/>
         </ListParagraph>
       </ListContainer>
   </ListItem>

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

 </List>
 
 
</Section>
);

export default Technologies;
