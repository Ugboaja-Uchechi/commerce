import { Link } from 'react-router-dom';
import './header.css';
import { useCart } from '../util/usecart';

const Header = () => {

  const { cartItems, toggleCartOpen } = useCart();

  return (
    <header className='header'>
      <div>
        <p>
          Menu
        </p>
      </div>
      <div>
        <h3>
          <Link to="/">
            Name
          </Link>
        </h3>
      </div>
      <div>
        <p onClick={toggleCartOpen}>Cart ({cartItems.length})</p>
      </div>
    </header>
  )
}

export default Header;