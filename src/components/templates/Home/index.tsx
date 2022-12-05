import { useState } from 'react'

import Banner from '../../atoms/Banner'
import Header from '../../organisms/Header'
import Modal from '../../organisms/Modal'

const HomeTemplate = () => {
  const [openModal, setOpenModal] = useState(false)

  setTimeout(() => {
    setOpenModal(true)
  }, 1000)

  return (
    <>
      <Header />

      <Banner />
      
      <Modal />

      {/* { openModal && <Modal /> } */}
    </>
  )
}

export default HomeTemplate