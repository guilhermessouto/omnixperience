import styled from "styled-components";
import { Gray900 } from "../../../assets/styles/colors";
import { XSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p `
  ${Gray900};
  ${XSmallDisplay}
`