import ListaDeContatos from './containers/ListaDeContatos'
import Estiloglobal, { Container } from './styles/index '

function App() {
  return (
    <>
      <Estiloglobal />
      <Container>
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
