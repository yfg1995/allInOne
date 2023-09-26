import { FC } from "react";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { IconTrashCan } from "../../../icons/IconTrashCan";

interface ICartItem {
  id: number;
  quantity: number;
}

export const CartItem: FC<ICartItem> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={item.imgUrl}
          className="w-32 h-20 object-cover select-none"
          alt=""
        />

        <div className="ml-4">
          <div className="text-xl">
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-sm text-slate-500">x{quantity}</span>
            )}
          </div>

          <div className="text-slate-500">{formatCurrency(item.price)}</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-4">{formatCurrency(item.price * quantity)}</div>

        <IconTrashCan
          onClick={() => removeFromCart(item.id)}
          className="w-5 h-5 fill-slate-500 hover:scale-110"
        />
      </div>
    </div>
  );
};
