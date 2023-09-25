import { FC } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "../../../components/Button";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface IStoreItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const StoreItem: FC<IStoreItem> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="w-96">
      <div
        className="h-52 bg-center bg-cover cursor-pointer"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <div className="flex justify-between items-center px-2 py-4 [&>*]:text-2xl [&>*]:font-semibold">
        <span>{name}</span>
        <span className="text-slate-400">{formatCurrency(price)}</span>
      </div>

      <div className="mt-4 px-2">
        {quantity === 0 ? (
          <Button
            title="+ Add To Cart"
            className="bg-emerald-500 rounded-lg w-full text-xl"
            onClick={() => increaseCartQuantity(id)}
          />
        ) : (
          <div className="flex items-center justify-between">
            <Button
              title="Remove"
              className="bg-red-400 rounded-lg"
              onClick={() => removeFromCart(id)}
            />
            <div className="flex items-center justify-center gap-x-4">
              <Button
                title="-"
                className="bg-emerald-500 rounded-lg text-xl"
                onClick={() => decreaseCartQuantity(id)}
              />
              <div>
                <span className="text-2xl">{quantity}</span> in cart
              </div>
              <Button
                title="+"
                className="bg-emerald-500 rounded-lg text-xl"
                onClick={() => increaseCartQuantity(id)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
