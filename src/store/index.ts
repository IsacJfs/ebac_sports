import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../services/api'
import favoritosReducer from './reducers/favoritos'
import carrinhoReducer from './reducers/carrinho'
import produtosReducer from './reducers/protudos'

export const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
