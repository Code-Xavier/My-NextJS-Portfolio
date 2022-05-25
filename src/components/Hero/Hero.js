import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  
 <Section row padding>
   <LeftSection>
     <SectionTitle main center>
       Hey There. <br />
       I'm Xavier. <br />
       Front-End Developer.
       
     </SectionTitle>
     <SectionText>
       I'm a software developer👨🏾‍💻 that combines the love of code 💻 with the love of music 🎸 in his daily routine. This portfolio is the love child of my two passions in life - Oh and of course also a place for displaying my web development skills 🤹🏾 to, you know, get a job!
     </SectionText>
     <Button  onClick={() => window.location = '#about'} >Contact Me 📱</Button>
     

   </LeftSection>
 </Section>
);

export default Hero;