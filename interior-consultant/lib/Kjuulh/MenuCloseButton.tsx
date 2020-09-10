import styled from "styled-components";
import Device from "../sizes/device";

export const MenuCloseButton = styled.div`
  height: 30px;
  width: 30px;
  background-color: red;

  :hover {
    background-color: #aaa;
  }

  :focus-within {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    z-index: 10;
  }
  @media (${Device.laptop}) {
    display: none;
  }
`;