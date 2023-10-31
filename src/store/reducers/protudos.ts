import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: [] as Produto[],
  reducers: {
    setProdutos: (state, action) => action.payload
  }
})

export const { setProdutos } = produtosSlice.actions
