import styled from "styled-components";

import { Black, Gray300 } from "../../../assets/styles/colors";

import { ContainerSmallElevation } from "../../../assets/styles/elevations";

import { XXSmallDisplay } from '../../../assets/styles/typography'

export const Container = styled.div `
  background-color: ${Gray300};
  padding: 15px 30px;
  width: 375px;
  margin: 0 15px;
  ${ContainerSmallElevation}
  line-height: 24px;

  li {
    margin: 0;
  }
`

export const ContentContainer = styled.div `
  margin-bottom: 10px;
`

export const Text = styled.p `
  ${XXSmallDisplay}
  text-shadow: 0 0 0 ${Black};
`