import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Produto[],
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const index = state.findIndex((p) => p.id === action.payload.id)
      if (index >= 0) {
        state.splice(index, 1)
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
