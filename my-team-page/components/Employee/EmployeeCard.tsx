import { Employee as EmployeeProps } from '../../lib/content';
import { FC } from 'react';
import styled from 'styled-components';
import Device from '../../lib/sizes/device';

interface Props {
  employee: EmployeeProps;
  index: number;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;

  :nth-child(even) {
    margin-top: 80px;
  }

  @media ${Device.laptop} {
    :nth-child(even) {
      margin-top: 0;
    }

    :nth-child(3n + 2) {
      margin-top: 80px;
    }
  }
`;

const TopPart = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Title = styled.p`
  writing-mode: vertical-lr;
  text-transform: uppercase;
  margin: 0;
`;
const Name = styled.p`
  text-transform: capitalize;
  margin: 0;
`;

export const EmployeeCard: FC<Props> = ({ employee, index }) => {
  const ProfilePicture = styled.div`
    flex-grow: 1;

    background: url(${employee.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    min-height: 300px;

    @media ${Device.tablet} {
      min-height: 500px;
    }
  `;

  return (
    <Container key={index}>
      <TopPart>
        <ProfilePicture></ProfilePicture>
        <Title>{employee.title}</Title>
      </TopPart>
      <Name>{employee.name}</Name>
    </Container>
  );
};
