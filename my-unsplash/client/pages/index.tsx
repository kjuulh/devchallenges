import styled from "styled-components";
import React, { useState } from "react";
import { Image, Images } from "../components/Images";
import { NextPage } from "next";
import * as https from "https";
import InfiniteScroll from "react-infinite-scroller";
import Axios from "axios";
import { AddPhotoDialog } from "../components/AddPhotoDialog";

const Page = styled.div`
  width: 100%;

  * {
    font-family: "Inconsolata", monospace;
  }
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
const Logo = styled.img`
  grid-area: logo;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
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
  font-family: "Inconsolata", monospace;
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

export interface HomeProps extends ImagesApiResponse {}

const Home: NextPage<HomeProps> = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [images, setImages] = useState<Image[]>(props.items);
  const [hasMoreItems, setHasMoreItems] = useState(props.hasNextPage);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const loadMoreImages = (page: number) => {
    const baseUrl = "https://localhost:5001/api/image?pageSize=10";
    let url = baseUrl;
    if (nextUrl) {
      url = nextUrl;
    }

    Axios.get<ImagesApiResponse>(url)
      .then((response) => {
        let localImages = images;
        const imageApiResp = response.data;
        if (imageApiResp) {
          imageApiResp.items.map((image) => {
            localImages.push(image);
          });

          if (imageApiResp.hasNextPage) {
            setImages(localImages);
            setNextUrl(baseUrl + `&pageNumber=${imageApiResp.pageIndex + 1}`);
          } else {
            setImages(localImages);
            setHasMoreItems(false);
          }
        }
      })
      .catch(() => {
        return;
      });
  };

  return (
    <Page>
      <AddPhotoDialog
        showDialog={showDialog}
        toggleDialog={() => setShowDialog(!showDialog)}
        onCancel={() => setShowDialog(false)}
        onSubmit={(v) => {
          Axios.post<{description: string; photoURL: string}>("https://localhost:5001/api/image", v).then(() => {
            setShowDialog(false)
            loadMoreImages(0);
          });
        }}
      />
      <Container>
        <Header>
          <Title>
            <Logo src="/unsplash-logo.svg" />
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
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreImages}
          hasMore={hasMoreItems}
          threshold={1500}
        >
          <ImageContent>
            <Images width={3} search={search} images={images} />
          </ImageContent>
        </InfiniteScroll>
      </Container>
    </Page>
  );
};

interface ImagesApiResponse {
  items: Image[];
  totalCount: number;
  totalPages: number;
  pageIndex: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export const getServerSideProps = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  try {
    const res = await fetch("https://localhost:5001/api/image?pageSize=10", {
      agent,
    });
    const data = (await res.json()) as ImagesApiResponse;
    return { props: data };
  } catch (e) {
    return { props: {} };
  }
};

export default Home;
