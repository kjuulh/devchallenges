import { LinkModel } from "../data/models";
import React, { FC } from "react";
import {
  Body,
  Footer,
  Hero,
  HeroBlogTitle,
  HeroCardContainer,
  HeroCTA,
  HeroDetails,
  HeroEmployeeAvatar,
  HeroEmployeeName,
  HeroEmployeeTitle,
  HeroText,
  HeroTitle,
  InteriorHomeView,
  Links,
  NavBar,
  NavLinks,
  NavLogo,
  NavMenu,
  NavSpacer,
} from "../Kjuulh";

interface HomeViewProps {
  onMenuOpen: () => void;
  title: string;
  links: LinkModel[];
  heroTitle: string;
  heroText: string;
  heroCTA: string;
  heroEmployeeName: string;
  heroEmployeeTitle: string;
  heroBlogTitle: string;
  author: string;
}

export const HeroCard = (props: {
  heroEmployeeName: string;
  heroEmployeeTitle: string;
  heroBlogTitle: string;
}) => (
    <HeroCardContainer>
      <HeroEmployeeAvatar alt="some random image"/>
      <HeroEmployeeName>{props.heroEmployeeName}</HeroEmployeeName>
      <HeroEmployeeTitle>{props.heroEmployeeTitle}</HeroEmployeeTitle>
      <HeroBlogTitle>{props.heroBlogTitle}</HeroBlogTitle>
    </HeroCardContainer>
);

export const HomeView: FC<HomeViewProps> = ({
  author,
  heroBlogTitle,
  heroCTA,
  heroEmployeeName,
  heroEmployeeTitle,
  heroText,
  heroTitle,
  links,
  onMenuOpen,
  title,
}) => (
  <InteriorHomeView>
    <NavBar>
      <NavLogo>{title}</NavLogo>
      <NavSpacer />
      <NavMenu onClick={onMenuOpen} />
      <NavLinks>
        <Links links={links} />
      </NavLinks>
    </NavBar>
    <Body>
      <Hero>
        <HeroTitle>{heroTitle}</HeroTitle>
        <HeroText>{heroText}</HeroText>
        <HeroCTA>{heroCTA}</HeroCTA>
      </Hero>
      <HeroDetails>
        <HeroCard
          heroEmployeeName={heroEmployeeName}
          heroBlogTitle={heroBlogTitle}
          heroEmployeeTitle={heroEmployeeTitle}
        />
      </HeroDetails>
    </Body>
    <Footer>{author}</Footer>
  </InteriorHomeView>
);
