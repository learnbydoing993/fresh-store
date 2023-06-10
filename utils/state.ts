import { Signal, signal } from "@preact/signals";
import { Item } from "./items.ts";

export type AddToCartFunction = (item: Item) => void;
export type RemoveFromCartFunction = (id: number) => void;

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export type AppStateType = {
  cart: Signal<CartItem[]>;
  addToCart: AddToCartFunction;
  removeFromCart: RemoveFromCartFunction;
};

function createAppState(): AppStateType {
  const cartData = localStorage.getItem("CART")
  const cart = signal<CartItem[]>(cartData ? JSON.parse(cartData) : []);

  const addToCart: AddToCartFunction = (item: Item): void => {
    const existingItem = cart.value.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      cart.value = [...cart.value]
    } else {
      cart.value = [...cart.value, {id: item.id, name:item.name, price:item.price, quantity: 1}]
    }
    localStorage.setItem("CART", JSON.stringify(cart.value));
  }

  const removeFromCart: RemoveFromCartFunction = (id: number): void => {
    const existingItem = cart.value.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        cart.value = [...cart.value]
      } else {
        cart.value = cart.value.filter((cartItem) => cartItem.id !== id);
      }
      localStorage.setItem("CART", JSON.stringify(cart.value));
    }
  }

  return { cart, addToCart, removeFromCart };
}

export default createAppState();
