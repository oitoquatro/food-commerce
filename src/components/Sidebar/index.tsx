import { Container } from './styles'

import menuImg from '../../assets/menu.svg'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'

export function Sidebar() {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='Abrir e fechar omenu' />
      </button>
      <nav>
        <li>
          <a href='#'>
            <BurgerIcon />
            <span>Hambúrguers</span>
          </a>
        </li>
      </nav>
    </Container>
  )
}
