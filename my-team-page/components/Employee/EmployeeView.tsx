import { FC } from 'react';
import {
  Container,
  TopBar,
  Title,
  Bio,
  BioTitle,
  BioDescription,
  Content,
  Footer,
} from '.';
import { Employee } from '../../lib/content';
import { EmployeeCard } from './EmployeeCard';

interface Props {
  title: string;
  bioTitle: string;
  bioDescription: string;
  employees: Employee[];
  author: string;
}

const EmployeeView: FC<Props> = (props) => {
  return (
    <Container>
      <TopBar>
        <Title>{props.title}</Title>
        <Bio>
          <BioTitle>{props.bioTitle}</BioTitle>
          <BioDescription>{props.bioDescription}</BioDescription>
        </Bio>
      </TopBar>
      <Content>
        {props.employees.map((e, index) => (
          <EmployeeCard employee={e} index={index}></EmployeeCard>
        ))}
      </Content>
      <Footer>{props.author}</Footer>
    </Container>
  );
};

export default EmployeeView;
