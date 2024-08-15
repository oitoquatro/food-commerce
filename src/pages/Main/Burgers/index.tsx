import { useSnack } from '../../../hooks/useSnack'

import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  const { burgers } = useSnack()

  return (
    <>
      <Cabecalho title='Burguers' />
      <SnackTitle>Hambúrguers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
