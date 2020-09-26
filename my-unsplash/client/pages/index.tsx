import styled from "styled-components";
import React, { FC } from "react";

const Page = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
`;
const Title = styled.div`
  display: grid;
  grid-template-areas: "logo title" "logo url";
  align-content: center;
  height: 100%;
`;
const Logo = styled.div`
  grid-area: logo;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  background-size: cover;
  background: url("https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
    center;
`;
const TitleText = styled.h4`
  grid-area: title;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 16px;
`;
const TitleUrl = styled.a`
  grid-area: url;
  font-weight: lighter;
  font-size: 11px;
`;
const Search = styled.div`
  border: 1px solid #666;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SearchIcon = styled.img`
  display: inline;
`;
const SearchText = styled.p`
  display: inline;
  vertical-align: middle;
  margin: 0;
  padding: 10px 20px;
`;
const HeaderSpacer = styled.div`
  flex-grow: 1;
`;
const AddPhotoButton = styled.button`
  background: green;
  border-radius: 18px;
  border: none;
  outline: none;
  height: 100%;
`;

interface ImageContainerProps {
  columns: number;
}
const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const PaneImage = styled.img`
  width: 100%;
`;

const Images: FC<{
  width: number;
  images: {
    url: string;
    description: string;
  }[];
}> = ({ width, images }) => (
  <ImageContainer columns={width}>
    {images.map((image) => (
      <PaneImage src={image.url} alt={image.description} />
    ))}
  </ImageContainer>
);
const Home = () => (
  <Page>
    <Container>
      <Header>
        <Title>
          <Logo />
          <TitleText>My Unsplash</TitleText>
          <TitleUrl>devchallenges.io</TitleUrl>
        </Title>
        <Search>
          <SearchIcon />
          <SearchText>Search by name</SearchText>
        </Search>
        <HeaderSpacer />
        <AddPhotoButton>Add a photo</AddPhotoButton>
      </Header>
      <Images
        width={3}
        images={[
          {
            url:
              "https://images.unsplash.com/photo-1599687350916-a8be7f9b68f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601109471554-7429b4103cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1000&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
          {
            url:
              "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "some-description",
          },
        ]}
      />
    </Container>
  </Page>
);

export default Home;
