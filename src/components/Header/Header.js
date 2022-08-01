import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
  {/*
  <Div1>
    <Link href="/">
      // <a style={{marginBottom:"20px"}}> <span>My Portfolio</span></a>
    </Link>
  </Div1> 
   */}

  <Div2>
    <li>
      <Link href="#">
      <NavLink> My Portfolio</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
      <NavLink> Technology</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
      <NavLink> About</NavLink>
      </Link>
    </li>
  </Div2>

  <Div3>
    <SocialIcons href="https://github.com/kamskanagi">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://linkedin.com/in/karamo-kanagi-ph-d-14546526/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://instagram.com/Pabi">
      <AiFillInstagram size="3rem" />
    </SocialIcons>

  </Div3>
</Container>
);

export default Header;
