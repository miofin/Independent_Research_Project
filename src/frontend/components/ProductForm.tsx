import React, { useState } from 'react'
import { addProduct, deleteProduct } from './api'
import '../public/ProductForm.css'
import type { Product } from '../types'


// TODO
// Implement the ProductFormProps interface.
// Note that mode can be either "add" or "delete".
// onProductAdded and onProductDeleted may or may not be necessarily passed to the component.
interface ProductFormProps {
    mode: string,
    setMode: void,
    status: string,
    setStatus: void,
    onProductAdded?: void,
    onProductDeleted?: void
}

const ProductForm: React.FC<ProductFormProps> = ({
    mode,
    setMode,
    status,
    setStatus,
    onProductAdded,
    onProductDeleted,
}) => {
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [productId, setProductId] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (mode === 'add') {
                // TODO
                // Call the correct function from the api module (located in components/api.ts) to add a product
                // and reset the state of the component. The view should go back to the list of products.
                const newProduct: Omit<Product, 'id'> = {
                    name: name,
                    image_url: imageUrl,
                    deleted: false
                };
                addProduct(newProduct);
                setStatus('Product added successfully')
                setMode('none');
            } else {
                // TODO (done)
                // Call the correct function from the api module (located in components/api.ts) to delete a product
                // and reset the state of the component. The view should go back to the list of products.
                deleteProduct(productId);
                setStatus('Product deleted successfully');
                setMode('none');
            }
        } catch (error) {
            console.error(
                `Error ${mode === 'add' ? 'adding' : 'deleting'} product:`,
                error
            )
        }
    }

    return (
        <div className="product-form-container">
            <h2 className="product-form-title">
                {/* TODO (done) Set the correct title based on whether the component is for adding or deleting products.
          The titles should be "Add New Product" and "Delete Product" respectively. */}
                {mode==="add" ? 'Add New Product' : 'Delete Product'}
            </h2>
            <form onSubmit={handleSubmit} className="product-form">
                {mode === 'add' ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Enter product name..."
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl"></label>
                            <input
                                type="url"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e)=>setImageUrl(e.target.value)}
                                placeholder="Enter image URL..."
                            />
                        </div>
                    </>
                ) : (
                    <div className="form-group">
                        <label htmlFor="productId"></label>
                        <input
                            type="text"
                            id="productId"
                            value={productId}
                            onChange={(e)=>setProductId(Number(e.target.value))}
                            placeholder="Enter product ID..."
                            required
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className={
                        mode === 'add' ? 'submit-button' : 'delete-button'
                    }
                >
                    {mode === 'add' ? 'Add Product' : 'Delete Product'}
                </button>
            </form>
        </div>
    )
}

export default ProductForm
