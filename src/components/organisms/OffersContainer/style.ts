import styled from "styled-components";

import { Gray300 } from "../../../assets/styles/colors";

export const Container = styled.section `
  background-color: ${Gray300};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`

export const Title = styled.p `
  margin-bottom: 35px;
`

export const CardsContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`