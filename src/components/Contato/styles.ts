import styled from 'styled-components'

export const Card = styled.div`
  background-color: #bbb8b4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  width: 50%;
`

export const Nome = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 16px;
  font-weight: bold;
  color: #111;
  background-color: #eeedec;
  border-radius: 8px;
  width: 80px;
  display: flex;
`

export const Info = styled.textarea`
  padding: 4px 8px;
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border-radius: 8px;
  display: inline-block;
  resize: none;
  border: none;
`

export const BarraAcoes = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 8px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #123;
  border-radius: 8px;
  margin-right: 12px;
`
