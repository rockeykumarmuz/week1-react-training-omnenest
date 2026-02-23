import type { Product } from "./productType";

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  totalItems: number;
  totalPrice: number;
}