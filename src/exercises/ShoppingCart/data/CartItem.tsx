import { FC } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

interface ICartItem {
  id: number;
  quantity: number;
}

export const CartItem: FC<ICartItem> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return <div>CartItem</div>;
};
