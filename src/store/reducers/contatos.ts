import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    { nome: 'Izacson', numero: 123456789, email: 'izacs@email.com', id: 1 },
    {
      nome: 'Joelly Mota',
      numero: 122256789,
      email: 'jjoelly@email.com',
      id: 2
    },
    { nome: 'Naomi', numero: 123555789, email: 'naguirobas@email.com', id: 3 }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
