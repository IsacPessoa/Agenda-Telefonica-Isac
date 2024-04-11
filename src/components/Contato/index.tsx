import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Nome>Nome do contato</S.Nome>
    <S.Tag>Número: 921234455</S.Tag>
    <S.Tag>Email: isacdavid@hotmail.com</S.Tag>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Excluir</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
