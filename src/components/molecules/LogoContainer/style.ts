import styled from "styled-components";

import { Green } from "../../../assets/styles/colors";

import { Display } from "../../../assets/styles/typography";

export const LogoContainer = styled.div `
  display: flex;
  align-items: center;
  margin-right: 40px;
`

export const Text = styled.p `
  ${Display}
  color: ${Green};
  text-transform: uppercase;
`