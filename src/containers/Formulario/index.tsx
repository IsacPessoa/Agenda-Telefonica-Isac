import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  BotaoSalvar,
  Campo,
  InfoCadastro,
  MainContainer,
  Titulo
} from '../../styles/index '
import { Form, Informacoes } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ nome, numero, email }))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Informacoes>
          <p>Informações</p>
          <InfoCadastro
            value={numero}
            onChange={(evento) => setNumero(evento.target.value)}
            placeholder="Número: "
          />
          <InfoCadastro
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="E-mail: "
          />
        </Informacoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
