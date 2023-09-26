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

  const buttonNotAllowed = () => {
    if (quantity > 1) {
      decreaseCartQuantity(id);
    }
  };

  return (
    <div className="w-96 shadow-2xl">
      <div
        className="h-52 bg-center bg-cover cursor-pointer rounded-t-lg"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <div className="border-2 border-t-0 border-slate-500 rounded-b-lg px-4 bg-slate-100">
        <div className="flex justify-between items-center py-4 [&>*]:text-2xl [&>*]:font-semibold">
          <span>{name}</span>
          <span className="text-slate-500">{formatCurrency(price)}</span>
        </div>

        <div className="my-8">
          {quantity === 0 ? (
            <Button
              title="Add to Cart"
              className="bg-emerald-500 rounded-lg w-full text-xl hover:bg-emerald-400 hover:text-white"
              onClick={() => increaseCartQuantity(id)}
            />
          ) : (
            <div className="flex items-center justify-between">
              <Button
                title="Remove"
                className="bg-red-500 rounded-lg hover:bg-red-400 hover:text-white"
                onClick={() => removeFromCart(id)}
              />

              <div className="flex items-center justify-between gap-x-4">
                <Button
                  title="-"
                  className={`${
                    quantity === 1 ? "pointer-events-none" : ""
                  } bg-emerald-500 rounded-lg text-xl hover:bg-emerald-400 hover:text-white`}
                  onClick={buttonNotAllowed}
                />

                <div className="relative mx-4">
                  <span className="text-2xl">{quantity}</span> in cart
                </div>

                <Button
                  title="+"
                  className="bg-emerald-500 rounded-lg text-xl hover:bg-emerald-400 hover:text-white"
                  onClick={() => increaseCartQuantity(id)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
