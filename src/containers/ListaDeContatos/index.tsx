import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container, Resultado } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <Resultado>Resultado(s) para: {termo}</Resultado>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              numero={c.numero}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
