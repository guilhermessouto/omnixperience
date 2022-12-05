import styled from "styled-components";

import { Green, White } from "../../../assets/styles/colors";

export const StyledButton = styled.button `
  margin: 3px 0;
  color: ${White};
  background-color: ${Green};
  font-weight: bolder;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpanLabel = styled.span `
  font-size: 1.2em;
  padding: 8px;
`