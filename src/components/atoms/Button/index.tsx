import Loader from "../Loader"

import { SpanLabel, StyledButton } from "./style"

type Props = {
  label: string
  loading?: boolean
}

const SubmitButton = (props: Props) => {
  return (
    <StyledButton
      type="submit"
    >
      {props.loading 
        ? <Loader />
        : <SpanLabel>{props.label}</SpanLabel>
      }
    </StyledButton>
  )
}

export default SubmitButton