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
      I use JavaScript across the stack in the front and back end of all my desktop, mobile, or web applications. It just works!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
             HTML/CSS<br />
             Tailwind<br />
             Bootstrap<br />
             React<br />
             Material UI
             
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Node/Express <br />
            Sanity<br />
            Firebase<br />
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
            Figma (UI/UX) <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
