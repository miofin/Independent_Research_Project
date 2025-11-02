import React from 'react'
import type { Product } from '../types'
import ProductCard from './ProductCard.tsx'
import '../public/ProductList.css'

// TODO
// Implement the ProductListProps interface.
interface ProductListProps {
    products: [],
    currentPage: number,
    totalPages: number,
    setCurrentPage: void
}

const ProductList: React.FC<ProductListProps> = ({
    products,
    currentPage,
    totalPages,
    setCurrentPage,
}) => {
    const renderPaginationLinks = () => {
        const links = []
        // TODO (done)
        // Here you should populate the "links" array with JSX elements for each page number.
        // Each link is an <a> element with the page number as the text content.
        // The current page should have the class "active".
        // Make sure to handle the click event.

        function handleClick(i: number) {
            setCurrentPage(i);
        }

        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
              links.push(<span key={i} className="active">{i}</span>);
            } else {
              links.push(
                <a key={i} href="/?page=${i}" onClick={(e)=>{
                    e.preventDefault();
                    handleClick(i);
                }}>{i}</a>
              );
            }
        }

        return links
    }

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="product-grid">
                    {
                        /* TODO (done) Generate a ProductCard component for each product in the products array. */
                        products.map((p: Product) => 
                            <ProductCard product={p}/>
                        )
                    }
                </div>
            )}
            <div className="pagination">{renderPaginationLinks()}</div>
        </div>
    )
}

export default ProductList
