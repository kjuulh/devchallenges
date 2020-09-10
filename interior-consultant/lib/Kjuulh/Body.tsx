import styled from "styled-components";
import Device from "../sizes/device";

export const Body = styled.main`
  margin: 100px 0;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  @media (${Device.laptop}) {
    flex-flow: row;
  }
`;