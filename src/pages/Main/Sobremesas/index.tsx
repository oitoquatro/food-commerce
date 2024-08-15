import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

import { Cabecalho } from '../../../components/Cabecalho'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Sobremesas() {
  const { sobremesas } = useContext(SnackContext)

  return (
    <>
      <Cabecalho title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={sobremesas}></Snacks>
    </>
  )
}
