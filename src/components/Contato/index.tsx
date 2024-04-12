import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  numero: numeroOriginal,
  nome: nomeOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (
      emailOriginal.length > 0 &&
      numeroOriginal.length > 0 &&
      nomeOriginal.length > 0
    ) {
      setEmail(emailOriginal)
      setNumero(numeroOriginal)
      setNome(nomeOriginal)
    }
  }, [nomeOriginal, emailOriginal, numeroOriginal])

  const cancelarEdicao = () => {
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
    setNome(nomeOriginal)
    setEstaEditando(false)
  }

  const desfazerEdicao = () => {
    setEstaEditando(false)
    cancelarEdicao()
  }

  return (
    <S.Card>
      {estaEditando ? (
        <S.InputNome
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      ) : (
        <S.Nome>{nome}</S.Nome>
      )}

      <S.Tag>Número:</S.Tag>
      <S.Info
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      ></S.Info>
      <S.Tag>E-mail:</S.Tag>
      <S.Info
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></S.Info>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    numero,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={desfazerEdicao}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
