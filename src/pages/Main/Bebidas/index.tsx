import { useEffect, useState } from 'react'
import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { getBebidas } from '../../../services/api'

import { SnackData } from '../../../interfaces/SnackData'

export default function Bebidas() {
  const [bebidas, setBebidas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const bebidasRequest = await getBebidas()

    setBebidas(bebidasRequest.data)
    })()

  }, [])

  return (
    <>
      <Cabecalho title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
