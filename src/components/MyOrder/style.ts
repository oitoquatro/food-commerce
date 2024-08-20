import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

//export const Container = styled.a``   <--- SERIA DESSA FORMA MÁS SERÁ FEITO COM A IMPORTAÇÃO DO "lINK"
export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background: ${({ theme }) => theme.colors.red};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, '#AA2424')};
  }
`
