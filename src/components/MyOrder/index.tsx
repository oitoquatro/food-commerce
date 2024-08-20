import { useCart } from '../../hooks/useCart'
import { Container } from './style'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export function MyOrder() {
  const { cart } = useCart()
  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}{/*padStart deixa com duas casas dec.*/}
    </Container>
  )
}
