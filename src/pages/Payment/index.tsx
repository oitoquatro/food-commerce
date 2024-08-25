import { Cabecalho } from '../../components/Cabecalho'
import { OrderHeader } from '../../components/OrderFile'
import { Container, Form, Inner } from './styles'

export default function Payment() {
  return (
    <Container>
      <Cabecalho title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>
          <div className='field'>
            <label htmlFor='full-name'>Nome e sobrenome</label>
            <input type='text' id='full-name' name='full-name' autoComplete='name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' autoComplete='email' />
            </div>
            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <input type='tel' id='mobile' name='mobile' autoComplete='phone' />
            </div>
            <div className='field'>
              <label htmlFor='document'>CPF / CNPJ</label>
              <input type='text' id='document' name='document' />
            </div>
          </div>
        </Form>
      </Inner>
    </Container>
  )
}
