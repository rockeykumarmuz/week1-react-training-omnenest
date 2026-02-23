import { createContext, useContext, useState } from "react";
import type { CartContextType, CartItem } from "../types/cartContextType";
import type { Product } from "../types/productType";

const CartContext = createContext<CartContextType | null>(null)

interface CartPropType {
  children: React.ReactNode
}

interface ProductPropType {
  product: Product
}

const CartProvider: React.FC<CartPropType> = ({children}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart_item')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const addToCart = ({product} : ProductPropType) => {
    setCart((prevCart ) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if(existingItem) {
        return prevCart
      } else {
        return [...prevCart, product] 
      }
    })
  }

  const removeFromCart = (productId: number) => {
    const filteredCart = cart.filter((prevCart) => prevCart.id !== productId)
    return filteredCart
  }

  return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
  {children}
  </CartContext.Provider>
}

export default CartProvider

export function useCart() {
  const cartContext = useContext(CartContext)
  return cartContext
}
