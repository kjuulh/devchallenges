import React, { FC } from "react";
import styled from "styled-components";
import Device from "../lib/sizes/device";

const InteriorHomeView = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  background-color: #111;
  padding: 0 20px;

  @media (${Device.laptop}) {
    padding: 0 100px;
  }

  * {
    color: white;
  }
`;

const NavBar = styled.div`
  display: flex;
  margin-top: 40px;
`;
const NavSpacer = styled.div`
  flex-grow: 1;
`;
const NavLogo = styled.div`
  border: 1px solid white;
  padding: 5px 10px;
`;

const NavMenu = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;

  :hover {
    background-color: #aaa;
  }

  :focus-within {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    z-index: 10;
  }
  @media (${Device.laptop}) {
    display: none;
  }
`;
const NavLinks = styled.div`
  gap: 20px;
  display: none;

  @media (${Device.laptop}) {
    display: flex;
  }
`;
const ActiveLink = styled.a`
  cursor: pointer;
  font-weight: bold;
`;
const Link = styled.a`
  cursor: pointer;

  :hover {
    color: #aaa;
  }

  :active {
    color: #bbb;
  }
`;

const NavLink: FC<{ active?: boolean }> = ({ active, children }) =>
  active ? <ActiveLink>{children}</ActiveLink> : <Link>{children}</Link>;

const Body = styled.main`
  margin: 100px 0;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  @media (${Device.laptop}) {
    flex-flow: row;
  }
`;
const Hero = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
`;
const HeroTitle = styled.h1``;
const HeroText = styled.h4``;
const HeroCTA = styled.a``;

const HeroDetails = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
    center;
  background-size: cover;
  border-radius: 5px;
  position: relative;
  min-height: 500px;
  max-height: 600px;
`;

const HeroCard = styled.div`
  position: absolute;
  padding: 20px;
  background-color: #222;
  border-radius: 20px;
  bottom: -20px;
  right: 20px;

  @media (${Device.laptopL}) {
    bottom: -100px;
    right: 100px;
  }
`;
const HeroEmployeeAvatar = styled.img``;
const HeroEmployeeName = styled.h2``;
const HeroEmployeeTitle = styled.h5``;
const HeroBlogTitle = styled.p``;

const Footer = styled.div`
  margin: 0 auto 20px;
`;

const Home = () => (
  <InteriorHomeView>
    <NavBar>
      <NavLogo>This Interior</NavLogo>
      <NavSpacer />
      <NavMenu></NavMenu>
      <NavLinks>
        <NavLink active={true}>Home</NavLink>
        <NavLink>Collection</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavBar>
    <Body>
      <Hero>
        <HeroTitle>Modern interior</HeroTitle>
        <HeroText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          dignissimos earum et itaque laborum obcaecati quidem ratione?
          Accusantium deleniti distinctio dolores itaque, laborum maxime
          mollitia quaerat recusandae repellendus sunt voluptate?
        </HeroText>
        <HeroCTA>Read More</HeroCTA>
      </Hero>
      <HeroDetails>
        <HeroCard>
          <HeroEmployeeAvatar alt="some random image"></HeroEmployeeAvatar>
          <HeroEmployeeName>Kasper J. Hermansen</HeroEmployeeName>
          <HeroEmployeeTitle>Software Engineer</HeroEmployeeTitle>
          <HeroBlogTitle>Some random blog title name</HeroBlogTitle>
        </HeroCard>
      </HeroDetails>
    </Body>
    <Footer>Kjuulh</Footer>
  </InteriorHomeView>
);

export default Home;
