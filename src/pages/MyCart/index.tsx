import { Cabecalho } from '../../components/Cabecalho'
import { OrderHeader } from '../../components/OrderFile'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Cabecalho title='carrinho' />
      <OrderHeader />
    </Container>
  )
}
