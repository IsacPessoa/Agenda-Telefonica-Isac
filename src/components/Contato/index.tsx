import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  numero: number
  email: string
}

const Contato = ({ email, numero, nome }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag>Número:</S.Tag>
      <S.Info value={numero}></S.Info>
      <S.Tag>E-mail:</S.Tag>
      <S.Info value={email}></S.Info>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir>Excluir</S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
