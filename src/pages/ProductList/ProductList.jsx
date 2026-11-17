import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ProductList(){
    const [products, setProducts] = useState([])

    async function getAllProducts() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
        setProducts(response.data)
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    return(
        <div>
            <h2>All Products</h2>
            {products.map((oneProduct)=>
            <div key={oneProduct._id}>
                <p>{oneProduct.title}</p>
                <p>{oneProduct.description}</p>
                <Link to={`/products/${oneProduct._id}`}>See Details</Link>
                <br />
            </div>
            )}
        </div>
    )
}

export default ProductList