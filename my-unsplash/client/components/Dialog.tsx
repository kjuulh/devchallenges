import styled from "styled-components";
import React, { FC } from "react";

const PageContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DarkBackground = styled.div`
  position: absolute;
  background: #000;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const CardDialog = styled.div`
  z-index: 101;
  opacity: 1;

  background: white;
  color: black;
  padding: 1rem;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
`;

interface DarkenBackgroundProps {
  show?: boolean;
  onClick: () => void;
}

export const Dialog: FC<DarkenBackgroundProps> = ({
  show,
  onClick,
  children,
}) =>
  show ? (
    <PageContainer>
      <CardDialog>{children}</CardDialog>
      <DarkBackground onClick={onClick} />
    </PageContainer>
  ) : null;
