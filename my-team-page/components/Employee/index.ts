import styled from 'styled-components';
import Device from '../../lib/sizes/device';

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${Device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Title = styled.h1``;
export const Bio = styled.div``;
export const BioTitle = styled.h3``;
export const BioDescription = styled.p``;

export const Content = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 90px;
  margin-bottom: 80px;

  @media ${Device.laptopL} {
    grid-template-columns: repeat(3, 1fr);

    column-gap: 80px;
    row-gap: 140px;
  }
`;

export const Footer = styled.p`
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 95vw;
  margin: 80px auto 30px;
  gap: 30px;

  @media ${Device.tablet} {
    max-width: 80vw;
  }

  @media ${Device.laptop} {
    max-width: 60vw;
    gap: 80px;
  }
`;

export * from './EmployeeView';
export * from './EmployeeCard';
