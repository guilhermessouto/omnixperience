import { useState, useEffect } from "react"

import Anchor from "../../atoms/Anchor"
import Banner from "../../atoms/Banner"
import Header from "../../organisms/Header"
import Offers from "../../organisms/OffersContainer"
import CepCardTemplate from "../CepCard"
import Loader from "../../atoms/Loader"
import { LoaderContainer } from "./style"

const OffersTemplate = () => {
  const [loading, setLoadidng] = useState(true)

  useEffect(() => {
    setLoadidng(false)
  })

  return (
    <>
      {loading ? <LoaderContainer><Loader size="large" theme="dark"/></LoaderContainer>
        :
          <>
            <Header />

            <Banner />

            <main>
              <CepCardTemplate />
              <Offers />
            </main>

            <Anchor /> 
          </>
      }
    </>
  )
}

export default OffersTemplate