import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

import { Cabecalho } from '../../../components/Cabecalho'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Pizzas() {
  const { pizzas } = useContext(SnackContext)

  return (
    <>
      <Cabecalho title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
