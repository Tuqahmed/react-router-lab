import {Routes, Route} from 'react-router'
import NavBar from './components/NavBar/NavBar'
import ProductList from './pages/ProductList/ProductList'
import HomePage from './pages/ProductDetails/HomePage'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/new-product' element={<CreateProduct/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
