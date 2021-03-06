// import React from 'react';
// import Gallery from './gallery';

// import { GridContainer } from './ProjectsStyles';
// import { Section, SectionTitle } from '../../styles/GlobalComponents';


// //seperating logic & content is important --> hence the constants

// const Projects = () => (
//   <Section nopadding id='projects'>
//     <SectionTitle main> Projects 🎸</SectionTitle> 
//       <GridContainer>

//       </GridContainer>
//   </Section>
// );

// export default Projects;

import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Visit</ExternalLinks>
              <ExternalLinks href={p.source}>Github</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;