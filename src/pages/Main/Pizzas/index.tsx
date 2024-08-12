import { Cabecalho } from '../../../components/Cabecalho'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizzas',
      name: 'Calabresa',
      description:
        'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona com borda recheada com catupiry.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizzas',
      name: 'Portuguesa',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate com borda recheada com catupiry.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.jpg',
    },
  ]

  return (
    <>
      <Cabecalho title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
