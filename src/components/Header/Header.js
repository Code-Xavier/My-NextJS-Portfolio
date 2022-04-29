import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiMusicSpell } from "react-icons/gi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20;'}}>
          {/*<GiMusicSpell size='3rem' /> */} <Span>The Musical Coder 🎼</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects 🎷</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies 🎺</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About 🪕</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Code-Xavier'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='www.linkedin.com/in/xavier-vs'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='#'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
