import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href='https://wa.me/50760753404'>+507 6075-3404</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:xaviervaloissmith@gmail.com'>contact@xaviervaloissmith.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Changing the world. One algorithm at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/Code-Xavier'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='www.linkedin.com/in/xavier-vs'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='#'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
