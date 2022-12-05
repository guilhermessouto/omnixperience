import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Offers from './components/pages/Offers'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/offers/:cep' element={<Offers />}/>
    </Routes>
  </BrowserRouter>
)

export default Router