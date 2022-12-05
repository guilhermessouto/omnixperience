import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCep } from '../../../api/services/cep'

import CepCard from "../../molecules/CepCard"
import NotFound from '../../molecules/NotFound'

import { Container, Title } from "./style"

const CepCardContainer = () => {
  const { cep }  = useParams()

  const { data } = useCep(cep)

  return (
    <Container>
      <Title>Endereço</Title>

      {data?.erro || data === undefined ? <NotFound /> 
        : <CepCard 
            cep={data?.cep}
            bairro={data?.bairro}
            localidade={data?.localidade}
            uf={data?.uf}
            logradouro={data?.logradouro}
          />
      }
    </Container>
  )
}

export default CepCardContainer