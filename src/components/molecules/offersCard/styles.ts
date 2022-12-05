import styled from "styled-components";

import { Blue, White } from "../../../assets/styles/colors";

import { ContainerSmallElevation } from "../../../assets/styles/elevations";

export const Container = styled.div `
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  background-color: ${White};
  ${ContainerSmallElevation}
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`

export const Title = styled.p `
  text-align: center;
  font-size: 2.3em;
  color: ${Blue};
  margin-bottom: 15px;
`

export const Text = styled.p `
  text-align: center;
  margin: 7px 0;
`

export const Footer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Cost = styled.p `
  text-align: center;
  margin: 7px 0;
`

export const Span = styled.span `
  font-size: 1.5em;
  color: ${Blue};
  font-weight: bolder;
`