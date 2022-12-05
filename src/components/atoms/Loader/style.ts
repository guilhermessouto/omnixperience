import styled from "styled-components";

type Props = {
  size: string
}

export const LoaderIMG = styled.img `
  ${(props: Props) => 
    props.size === 'large' ? `
      width: 64px;
      height: 64px;
    ` : `
      width: 32px;
      height: 32px;
    `
  }
  user-select: none;
  pointer-events: none;
`