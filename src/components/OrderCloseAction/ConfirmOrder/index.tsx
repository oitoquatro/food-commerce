import { currencyFormat } from '../../../helpers/currencyFormats'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export function ConfirmOrder() {
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)

  return (
    <Container>
      <button type='button' onClick={confirmOrder}>
        Finalizar Pedido
      </button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
