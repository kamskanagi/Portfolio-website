import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <footer>
    <LinkList>
    <LinkColumn>
      <LinkTitle>call</LinkTitle>
      <LinkItem href="tel: 11-11-11-11">+886 966 463 968</LinkItem>
    </LinkColumn>
    <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="tel: 11-11-11-11"> kamskanagi@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>

    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time </Slogan>
      </CompanyContainer>

      <SocialIcons href="https://github.com">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://linkedin.com">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://instagram.com">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
      
    </SocialIconsContainer>
    
  </footer>
  );
};

export default Footer;
