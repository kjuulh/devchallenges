import styled from "styled-components";
import Device from "../sizes/device";

export const InteriorHomeView = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  background-color: #111;
  padding: 0 20px;

  @media (${Device.laptop}) {
    padding: 0 100px;
  }

  * {
    color: white;
  }
`;