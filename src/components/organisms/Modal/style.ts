import styled from "styled-components";

import { Blue, White } from "../../../assets/styles/colors";

import { SmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  z-index: 1000;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  backdrop-filter: blur(2.5px);
`

export const ContentContainer = styled.div `
  background-color: ${White};
  padding: 15px;
  border-radius: 7px;

  a {
    text-decoration: underline;
    font-size: .9em;
  }
`
export const Title = styled.h1 `
  color: ${Blue};
  ${SmallDisplay}
  margin-bottom: 7px;
`