import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'Joelly Mota',
    numero: 92985569300,
    email: 'isacdavidpessoa@hotmail.com'
  },
  {
    nome: 'Isac Pessoa',
    numero: 92985569300,
    email: 'isacdavidpessoa@hotmail.com'
  },
  {
    nome: 'Naomi',
    numero: 92985569300,
    email: 'isacdavidpessoa@hotmail.com'
  },
  {
    nome: 'Pulga',
    numero: 92985569300,
    email: 'isacdavidpessoa@hotmail.com'
  },
  {
    nome: 'Bigodinha',
    numero: 92985569300,
    email: 'isacdavidpessoa@hotmail.com'
  }
]

const ListaDeContatos = () => (
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

export default ListaDeContatos
