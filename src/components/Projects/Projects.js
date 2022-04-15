import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

//seperating logic & content is important --> hence the constants

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Learning Projects</SectionTitle>
    <GridContainer>
      {/* Here, destructering is used to not have to repeat projects.xxxx again and again */}
      {projects.map(({ id, image, title, description, tags, source, visit, tutorial}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <br />
          <div>
            <TitleContent>Stack</TitleContent>
            <br />
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={source}>GitHub</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ) )}
    </GridContainer>
  </Section>
);

export default Projects;