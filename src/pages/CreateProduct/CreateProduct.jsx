import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateProduct(){
    const [formData, setFormData] = useState({
        category:'',
        description:'',
        price:'',
        quantity:'',
        title:''
    })

    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products`, formData)

        navigate('/products/' + response.data._id)
    }

    return(
        <div>
            <h2>Create Product</h2>
            <br />

            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category:</label>
                <input 
                type="text" 
                value={formData.category}
                id="category"
                name="category"
                onChange={handleChange}
                />
                <br />
                <br />

                <label htmlFor="description">Description:</label>
                <input 
                type="text" 
                value={formData.description}
                id="description"
                name="description"
                onChange={handleChange}
                />
                <br />
                <br />

                <label htmlFor="price">Price:</label>
                <input 
                type="number" 
                value={formData.price}
                id="price"
                name="price"
                onChange={handleChange}
                />
                <br />
                <br />

                <label htmlFor="quantity">Quantity:</label>
                <input 
                type="number" 
                value={formData.quantity}
                id="quantity"
                name="quantity"
                onChange={handleChange}
                />
                <br />
                <br />

                <label htmlFor="title">Title:</label>
                <input 
                type="text" 
                value={formData.title}
                id="title"
                name="title"
                onChange={handleChange}
                />
                <br />
                <br />

                <button>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct