import React from 'react'
import type { Product } from '../types/productType'
import ProductCard from './ProductCard'

interface PropType {
  products: Product[]
}

const ProductList: React.FC<PropType> = ({products}) => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-3'>
      {products.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList
