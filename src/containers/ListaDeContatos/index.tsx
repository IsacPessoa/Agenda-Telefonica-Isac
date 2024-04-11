import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p>Total de contatos presentes na agenda: </p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
