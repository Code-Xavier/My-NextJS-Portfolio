import React from 'react';
import { DiFirebase, DiReact, DiTerminal, DiUikit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    {/* <SectionDivider /> */}
    <br />
    <br />
    <SectionTitle>Technologies 🎺</SectionTitle>
    <br />
    <SectionText>
      There are the technologies I have either already learned, or that I am learning cuurently by building projects that utitlize them: 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
             HTML/CSS<br />
             Markdown<br/>
             Bootstrap/Tailwind<br />
             JavaScript<br/>
             React/Redux<br />
             NextJS/Gatsby<br />
             Material UI
             
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node <br />
            Express<br />
            MongoDB<br />
            Mongoose<br />
            REST APIs<br/>
            Auth0<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size='3rem'/>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Figma (UI/UX) <br />
            WordPress <br />
            Sanity.io
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
