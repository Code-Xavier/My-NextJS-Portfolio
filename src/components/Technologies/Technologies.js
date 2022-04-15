import React from 'react';
import { DiFirebase, DiReact, DiTerminal, DiUikit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world, building apps with both Front-End and Back-End technologies
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js<br />
            Next.js<br />
            Tailwind/SCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Node & Express<br />
            MongoDB<br />
            Parse Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size='3rem'/>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Typescript<br />
            Figma (UI/UX) <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
