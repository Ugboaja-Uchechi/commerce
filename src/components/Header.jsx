import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
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
        <p>Cart</p>
      </div>
    </header>
  )
}

export default Header;