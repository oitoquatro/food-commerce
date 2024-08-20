import { FiPlus } from 'react-icons/fi'

import { Container } from './Styles'
import { currencyFormat } from '../../helpers/currencyFormats'
import { SkeletonSnack } from './SkeletonSnack'
import { SnackData } from '../../interfaces/SnackData'
import { useCart } from '../../hooks/useCart'

interface SnacksProps {
  snacks: SnackData[] //"SnackData" vem de "interfaces"(arquivo de tipagem)
}

export function Snacks({ snacks }: SnacksProps) {
  //"useCart" está fazendo a chamada do "addSnackIntoCart"
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {
            const snackExistent = cart.find(
              (item) => item.snack === snack.snack && item.id === snack.id,
            )
            //pra executar qualquer código javascript dentro dessa função é preciso envolvelo com o return dentro da chaves.
            return (
              <div key={snack.id} className='snack'>
                {snackExistent && <span>{snackExistent.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  {/**"onClick" com a função de empilhar esperando add o snack */}
                  <button type='button' onClick={() => addSnackIntoCart(snack)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
