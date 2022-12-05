import styled from "styled-components";

import { Blue, White } from "../../../assets/styles/colors";

import { XXSmallDisplay } from "../../../assets/styles/typography";

type Props = {
  showMenu: boolean
}

export const ListContainer = styled.ul `
  display: flex;
  align-items: center;

  @media(max-width: 700px) {
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    top: 64px;
    right: 0;
    background-color: ${Blue};
    z-index: 1000;
    transition: .3s;
    visibility: hidden;
    overflow-y:  hidden;
    
    ${(props: Props) => props.showMenu
      ? `
        height: 25vh;
        visibility: visible;
        overflow-y: auto;
      ` 
      : ''
    }
  }
`

export const Item = styled.li `
  margin: 0 10px;

  @media(max-width: 700px) {
    margin-bottom: 15px;
  }
`

export const Anchor = styled.a `
  ${XXSmallDisplay}
  color: ${White};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  };
`