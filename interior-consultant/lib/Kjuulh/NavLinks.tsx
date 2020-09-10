import styled from "styled-components";
import Device from "../sizes/device";

export const NavLinks = styled.div`
  gap: 20px;
  display: none;

  @media (${Device.laptop}) {
    display: flex;
  }
`;