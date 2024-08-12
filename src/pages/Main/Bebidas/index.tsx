import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Bebidas() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola 2l',
      description:
        'A tradicional Coca-Cola que todo mundo adora.',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antarctica',
      description:
        'O irresistível e saboroso Guaraná em sua versão de latinha.',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de Abacaxí',
      description:
        'Suco natural de abacaxí com hortelã.',
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]

  return (
    <>
      <Cabecalho title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
