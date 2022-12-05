import styled from "styled-components";

import { Blue } from "../../../assets/styles/colors";

export const Container = styled.header `
  background-color: ${Blue};
  display: flex;
  align-items: center;
  padding: 15px 75px;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`