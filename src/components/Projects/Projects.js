import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
<Section nopadding id="projects">
  <SectionDivider/>
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {[{title: 'Project 01', 
       description: 'This is a really long title.'}].map((project) => (
      <div>
        {project.title}
        <br/>
        {project.description}
      </div>
    ))}
  </GridContainer>
</Section>
);

export default Projects;