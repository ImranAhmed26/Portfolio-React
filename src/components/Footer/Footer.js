import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:01764005558">01764005558</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ahmed.imran@ieee.org">ahmed.imran@ieee.org</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This portfolio website was designed using React JS  </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/ImranAhmed26">
      <AiFillGithub size="3rem"/>
    </SocialIcons>

    <SocialIcons href="https://www.linkedin.com/in/imran-ahmed-9a0375142/">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>

    <SocialIcons href="https://www.instagram.com/ahmmed_imraan">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
    </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
