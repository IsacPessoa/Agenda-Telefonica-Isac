import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const Estiloglobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  color: #111;
  border-color: #b2b3da;
  width: 100%;
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

export const BotaoVoltar = styled(Botao)`
  background-color: ${variaveis.amarelo2};
`

export const InfoCadastro = styled(Info)`
  border: 2px solid rgba(0, 0, 0, 1);
  border-color: #b2b3da;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default Estiloglobal
