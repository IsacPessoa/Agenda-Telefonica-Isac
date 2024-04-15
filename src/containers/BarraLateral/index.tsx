import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { BotaoVoltar, Campo } from '../../styles/index '

type Props = {
  paginaInicial: boolean
}

const BarraLateral = ({ paginaInicial }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {paginaInicial ? (
          <>
            <Campo
              type="text"
              placeholder="Pesquisar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
          </>
        ) : (
          <BotaoVoltar onClick={() => navigate('/')}>
            Voltar para contatos
          </BotaoVoltar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
