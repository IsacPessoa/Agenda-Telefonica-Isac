import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles/index '

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Pesquisar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </div>
    </S.Aside>
  )
}

export default BarraLateral
