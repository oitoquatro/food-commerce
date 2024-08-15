import { useSnack } from '../../../hooks/useSnack'

import { Cabecalho } from '../../../components/Cabecalho'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Sobremesas() {
  const { sobremesas } = useSnack()

  return (
    <>
      <Cabecalho title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={sobremesas}></Snacks>
    </>
  )
}
