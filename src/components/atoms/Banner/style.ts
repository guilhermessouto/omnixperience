import styled from "styled-components";

import { Black, Green, White } from "../../../assets/styles/colors";

import { Display } from "../../../assets/styles/typography";

const IMG = '../../../public/static/images/banner.jpg'

export const BannerIMG = styled.div `
  background-image: url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: calc(100vh - 67px);
  display: flex;
  align-content: center;
  justify-content: flex-end;

  @media(max-width: 515px) {
    background-position: 35%;
  }
`

export const Content = styled.div `
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media(max-width: 515px) {
    margin-right: 0;
  }
`

export const Text = styled.p `
  ${Display}
  text-transform: uppercase;
  text-align: center;
  color: ${White};
  text-shadow: 0 0 1px ${Black};

  span {
    color: ${Green}
  }
`
