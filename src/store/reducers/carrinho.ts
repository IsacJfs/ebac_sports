import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      if (!state.find((p) => p.id === action.payload.id)) {
        state.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
