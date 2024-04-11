import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Izacson', 123456789, 'isacs@email.com', 1),
    new Contato('Izacjon', 123456789, 'isacj@email.com', 2),
    new Contato('Izacton', 123456789, 'isact@email.com', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
