import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Produto } from '../App'
import { apiSlice } from '../services/api'
import favoritosReducer from './reducers/favoritos'

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: [] as Produto[],
  reducers: {
    setProdutos: (state, action) => action.payload
  }
})

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      if (state.find((p) => p.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.push(action.payload)
      }
    }
  }
})

// const favoritosSlice = createSlice({
//   name: 'favoritos',
//   initialState: [] as Produto[],
//   reducers: {
//     favoritar: (state, action) => {
//       const index = state.findIndex((p) => p.id === action.payload.id)
//       if (index >= 0) {
//         state.splice(index, 1)
//       } else {
//         state.push(action.payload)
//       }
//     }
//   }
// })

export const store = configureStore({
  reducer: {
    produtos: produtosSlice.reducer,
    carrinho: carrinhoSlice.reducer,
    favoritos: favoritosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export const { setProdutos } = produtosSlice.actions
export const { adicionarAoCarrinho } = carrinhoSlice.actions
