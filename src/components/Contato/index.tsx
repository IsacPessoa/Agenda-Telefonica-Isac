import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Nome>Isac Pessoa</S.Nome>
    <S.Tag>Número:</S.Tag>
    <S.Info>921234455</S.Info>
    <S.Tag>E-mail:</S.Tag>
    <S.Info>isacdavid@hotmail.com</S.Info>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Excluir</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
