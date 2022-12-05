import { QueryKey } from 'react-query'

export const createUseUserKey = (cep: string | undefined): QueryKey => ['cep', cep]