import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import Estiloglobal, { Container } from './styles/index '

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Estiloglobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
