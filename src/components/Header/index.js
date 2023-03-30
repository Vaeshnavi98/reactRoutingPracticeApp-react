import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar1">
    <div className="img-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img-deco1"
      />
      <p>Wave</p>
    </div>
    <ul>
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
