import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #eeedec;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 12px;
`

export const Nome = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
  color: #111;
`

export const InputNome = styled.input`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
  color: #111;
  background-color: transparent;
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${variaveis.azul};
  border-radius: 8px;
  width: 80px;
  display: flex;
`

export const Info = styled.textarea`
  padding: 4px 8px;
  font-size: 16px;
  font-style: italic;
  color: #111;
  background-color: transparent;
  border-radius: 8px;
  display: inline-block;
  resize: none;
  border: none;
  width: 400px;
`

export const BarraAcoes = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 8px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.amarelo2};
  border-radius: 5px;
  margin-right: 12px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
