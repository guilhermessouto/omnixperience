import styled from "styled-components";

export const Container = styled.div `
  display: none;
  
  @media(max-width: 700px) {
    display: block;
  }
`

export const Button = styled.button `
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
`