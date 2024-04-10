import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import Estiloglobal, { Container } from './styles/index '

function App() {
  return (
    <>
      <Estiloglobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
