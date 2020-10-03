import React, { FC, useEffect, useState } from "react";
import ImageColumn from "./ImageColumn";
import PaneImage from "./PaneImage";
import ImageContainer from "./ImageContainer";
import { Dialog } from "./Dialog";
import styled from "styled-components";
import { DeletePhotoDialog } from "./AddPhotoDialog";
import Axios from "axios";

export interface Image {
  id: string;
  url: string;
  description: string;
}

interface ImagesProps {
  width: number;
  images: Image[];
  search?: string;
}

const PaneHover = styled.div``;

const PaneContainer = styled.div`
  border-radius: 30px;
  position: relative;

  :not(:hover) {
    .pane--hover {
      display: none;
    }
  }

  :hover {
    .pane--hover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 3px;
      width: 100%;
      z-index: 15;
      offset: none;
    }
    display: block;
  }
`;

const PaneBackground = styled.div`
  border-radius: 30px;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
const PaneContent = styled.div`
  position: relative;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-flow: column;
  padding: 2rem;
  align-items: start;
  justify-content: space-between;

  box-sizing: border-box;
  p {
    margin: 0;
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: 0.05rem;
    color: white;
    user-select: none;
  }
`;

const DeleteButton = styled.button`
  flex-grow: 0;
  align-self: end;
  background: rgba(208, 57, 57, 0);
  border: 2px solid #dc2e2e;
  color: #dc2e2e;
  font-weight: bold;
  border-radius: 50px;
  padding: 4px 12px;
  transition: all 200ms ease;
  user-select: none;

  :hover {
    background: rgba(208, 57, 57, 0.25);
  }
`;

export const Pane = (props: { image: Image; onClick: () => void }) => (
  <PaneContainer>
    <PaneImage
      src={props.image.url}
      alt={props.image.description}
      onClick={props.onClick}
    />

    <PaneHover className="pane--hover">
      <PaneBackground />
      <PaneContent>
        <DeleteButton onClick={props.onClick}>Delete</DeleteButton>
        <p>{props.image.description}</p>
      </PaneContent>
    </PaneHover>
  </PaneContainer>
);

export const Images: FC<ImagesProps> = ({ width, images, search }) => {
  const [filteredImages, setFilteredImages] = useState<Image[]>(images);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (search) {
      setFilteredImages(
        images.filter((image) => image.description.includes(search))
      );
    } else {
      setFilteredImages(images);
    }
  }, [search]);

  const columns: Image[][] = [];
  if (filteredImages) {
    filteredImages.forEach((img, i) => {
      const column = i % width;
      if (i < width) {
        columns[column] = [];
      }

      columns[column].push(img);
    });
  }

  return (
    <ImageContainer>
      <DeletePhotoDialog
        showDialog={showDialog}
        toggleDialog={() => setShowDialog(!showDialog)}
        onSubmit={(v) => {
          console.log(v);
          if (v.password === 'Blizzar1') {
            console.log('accepted password')
              setShowDialog(false)
              Axios.delete('')
          }

        }}
        onCancel={() => setShowDialog(false)}
      />
      {columns.map((column, index: number) => (
        <ImageColumn key={index} columns={width}>
          {column.map((image, index: number) => (
            <Pane
              key={index}
              image={image}
              onClick={() => setShowDialog(true)}
            />
          ))}
        </ImageColumn>
      ))}
    </ImageContainer>
  );
};
