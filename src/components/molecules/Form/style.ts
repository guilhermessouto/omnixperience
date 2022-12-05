import styled from "styled-components";

import { Error as ErrorColor, Gray900 } from "../../../assets/styles/colors";

import { XXSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  form {
    display: flex;
    flex-direction: column;
  }
`

export const FieldContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  input {
    padding: 11px;
    outline: none;
    border: 1.9px solid black;

    &::placeholder {
      color: ${Gray900};
      font-size: 1.05em;
    }
  }
`

export const Label = styled.label `
  ${XXSmallDisplay}
  margin-bottom: 12px;
`

export const Error = styled.small `
  color: ${ErrorColor};
  font-weight: 600;
  margin-top: 7px;
`