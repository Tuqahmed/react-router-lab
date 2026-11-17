import { Link } from 'react-router'

function NavBar() {
  return (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/new-Product'}>New Product</Link>
    </nav>
  )
}

export default NavBar