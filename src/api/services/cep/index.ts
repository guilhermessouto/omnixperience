import { AxiosRequestConfig } from 'axios'

import { useQuery } from 'react-query'

import api from '../../index'

import { createUseUserKey } from './keys'

import { Cep } from './types'

export const useCep = (cep: string | undefined, options?: AxiosRequestConfig) => {

  return useQuery<Cep>(
    createUseUserKey(cep),
    () => {
        return api.get<Cep>(`/${cep}/json`, options)
        .then(res => {
          return res.data
        })
      }
  )
}