import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

import { SnackTitle } from '../../../components/SnackTitle'
import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'

export default function Bebidas() {
  const { bebidas } = useContext(SnackContext)

  return (
    <>
      <Cabecalho title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
