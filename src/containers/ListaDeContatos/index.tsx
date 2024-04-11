import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>Total de contatos presentes na agenda: </p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato nome={c.nome} email={c.email} numero={c.numero} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
