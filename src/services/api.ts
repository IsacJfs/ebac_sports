import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Array<Produto>, void>({
      query: () => 'https://fake-api-tau.vercel.app/api/ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = apiSlice
