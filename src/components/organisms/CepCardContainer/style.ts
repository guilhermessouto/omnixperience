import styled from "styled-components";

import { Gray900, White } from "../../../assets/styles/colors";
import { Display } from "../../../assets/styles/typography";

export const Container = styled.section `
  background-color: ${White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`

export const Title = styled.p `
  ${Display}
  color: ${Gray900};
  margin-bottom: 25px;
`