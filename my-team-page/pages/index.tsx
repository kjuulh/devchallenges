import React from 'react';
import { Employees } from '../lib/content';
import EmployeeView from '../components/Employee/EmployeeView';

const Home = () => {
  return (
    <EmployeeView
      title='The Creative Crew'
      author='kjuulh'
      employees={Employees}
      bioTitle='Who we are'
      bioDescription={`
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed iste
            perspiciatis ad natus est enim ut, commodi cupiditate hic obcaecati
            facere aliquid id alias sit expedita pariatur maiores sunt.
            Deserunt!`}
    ></EmployeeView>
  );
};

export default Home;
