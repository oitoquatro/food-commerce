import { useSnack } from '../../../hooks/useSnack'

import { SnackTitle } from '../../../components/SnackTitle'
import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'

export default function Bebidas() {
  const { bebidas } = useSnack()

  return (
    <>
      <Cabecalho title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
