import { useCart } from '../../hooks/useCart'
import { Container } from './style'

export function MyOrder() {
  const { cart } = useCart()
  return <Container to={'cart'}>{cart.length}</Container>
}
