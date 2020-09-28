import styled from "styled-components";

interface ImageColumnProps {
  columns: number;
}

const ImageColumn = styled.div<ImageColumnProps>`
  ${({ columns }) => `
   max-width: ${100 / columns}%
`};
  gap: 2rem;
  display: flex;
  flex-flow: column;
`;

export default ImageColumn;
