import { Cabecalho } from "../../components/Cabecalho";
import { OrderHeader } from "../../components/OrderFile";
import { Container, Inner } from "./styles";

export default function Payment() {
  return (
    <Container>
      <Cabecalho title='Pagamento' />
      <OrderHeader />
      <Inner>Inner</Inner>
    </Container>
  )
}
