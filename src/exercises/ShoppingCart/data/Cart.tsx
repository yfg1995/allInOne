import { FC } from "react";
import { IconClose } from "../../../icons/IconClose";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

interface ICart {}

export const Cart: FC<ICart> = () => {
  const { isOpen, isOpenCart, cartItems } = useShoppingCart();

  return (
    <>
      <div
        onClick={isOpenCart}
        className={`fixed top-0 left-0 h-screen w-full bg-black z-40 transition opacity-70 duration-0 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed right-0 top-0 z-50 h-screen bg-white w-2/6 px-6 py-4 transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Cart</h2>

          <IconClose onClick={isOpenCart} className="w-6 h-6" />
        </div>

        <div className="[&>*]:my-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className="text-lg font-semibold flex justify-end">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </>
  );
};
