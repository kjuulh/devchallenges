import styled from "styled-components";
import Device from "../sizes/device";

export const Hero = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
`;
export const HeroTitle = styled.h1``;
export const HeroText = styled.h4``;
export const HeroCTA = styled.a``;
export const HeroDetails = styled.div`
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
export const HeroCardContainer = styled.div`
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
