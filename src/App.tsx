import { useEffect, useState } from 'react'
import { ProductServcie } from './services/product.service'
import type { Product } from './types/productType'
import ProductList from './components/ProductList'
import Header from './components/Header'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await ProductServcie.getAllProducts()
        setProducts(data)
      } catch (error) {
        console.error('failed to fetch the products ', error)
      }
    }

    getProducts()
  }, [])

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  )
}

export default App
