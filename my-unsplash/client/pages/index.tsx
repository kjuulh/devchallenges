import styled from "styled-components";
import React, { useState } from "react";
import { Images } from "../components/Images";
import { Dialog } from "../components/Dialog";

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
  margin: 1rem 0;
  gap: 2rem;
`;
const Title = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-areas:
    "logo title"
    "logo url";
  grid-template-rows: repeat(2, 1fr);
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
  vertical-align: bottom;
`;
const TitleUrl = styled.a`
  grid-area: url;
  font-weight: lighter;
  font-size: 11px;
  vertical-align: top;
`;
const Search = styled.div`
  border: 1px solid #aaa;
  border-radius: 25px;
  display: flex;
  justify-content: start;
  gap: 1rem;
  align-items: center;
  height: 100%;
  width: 350px;
`;
const SearchIcon = styled.img`
  margin-left: 1.5rem;
  min-width: 25px;
  height: 25px;
  background: #000;
`;
const SearchText = styled.input`
  color: #777;
  font-weight: 500;
  background: none;
  border: none;
  outline: none;
  display: block;
  min-width: 40px;
  width: 100%;
  max-width: 100%;
  margin: 0 1.5rem 0 0;
  transition: color 100ms ease;

  :hover {
    color: #555;
  }

  :focus {
    color: #333;
  }
`;
const HeaderSpacer = styled.div`
  flex-grow: 1;
`;
const AddPhotoButton = styled.button`
  background: green;
  border-radius: 25px;
  border: none;
  outline: none;
  height: 100%;
  padding: 0 2.5rem;
`;

const ImageContent = styled.main`
  margin: 2rem 0;
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const [showDialog, setShowDialog] = useState(true);

  return (
    <Page>
      <Dialog show={showDialog} onClick={() => setShowDialog(!showDialog)}>
        <div>some stupid text</div>
      </Dialog>
      <Container>
        <Header>
          <Title>
            <Logo />
            <TitleText>My Unsplash</TitleText>
            <TitleUrl>devchallenges.io</TitleUrl>
          </Title>
          <Search>
            <SearchIcon />
            <SearchText
              placeholder="Search by name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
          <HeaderSpacer />
          <AddPhotoButton onClick={() => setShowDialog(!showDialog)}>
            Add a photo
          </AddPhotoButton>
        </Header>
        <ImageContent>
          <Images
            width={3}
            search={search}
            images={[
              {
                url:
                  "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                description: "some",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1601109471554-7429b4103cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                description: "some-description",
              },

              {
                url:
                  "https://images.unsplash.com/photo-1599687266725-0d4d52716b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },

              {
                url:
                  "https://images.unsplash.com/photo-1601114721973-90856b4654da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                description: "some-description",
              },

              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },

              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },
              {
                url:
                  "https://images.unsplash.com/photo-1584964139384-8baf818ba6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
                description: "some-description",
              },
            ]}
          />
        </ImageContent>
      </Container>
    </Page>
  );
};

export default Home;
