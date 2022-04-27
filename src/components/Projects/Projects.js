import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, tags} from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="projects">
   <SectionDivider />
   <SectionTitle main> Project</SectionTitle>
   <GridContainer>

     {projects.map((project) => (
       
       <BlogCard key={project.id}>
         <Img src={project.image} />
         <TitleContent>
           <HeaderThree> {project.title}</HeaderThree>
           <Hr />
         </TitleContent>
         <CardInfo>{project.description}</CardInfo>
         <div>
           <TitleContent> Stack</TitleContent>
           <TagList>
             {project.tags.map((tag , i) =>( 
             <Tag key={i}>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList> 
              <ExternalLinks  href="">Code</ExternalLinks>
              <ExternalLinks  href="">Source</ExternalLinks>
         
         </UtilityList>
         
       </BlogCard>
     ))}
   </GridContainer>
 </Section>
);

export default Projects;