import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../exercises/ShoppingCart/context/ShoppingCartContext";

export const Navbar: FC = () => {
  const { isOpenCart, cartQuantity } = useShoppingCart();

  return (
    <div className="flex justify-between items-center mb-8 h-24 sticky top-0 z-10 bg-white border-emerald-500 border-b-2 z-100 px-4">
      <ul className="flex [&>*]:mr-6 text-xl font-medium">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/store">Store</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      {cartQuantity > 0 && (
        <button
          onClick={isOpenCart}
          className="relative border-2 rounded-full border-slate-150 p-2.5 hover:border-emerald-500 transition"
        >
          <svg viewBox="0 0 576 512" className="w-6 h-6 fill-emerald-500">
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          <div className="absolute bottom-0 right-0 w-5 h-5 text-white translate-x-1/4 translate-y-1/4 text-sm flex justify-center items-center bg-red-500 rounded-full">
            {cartQuantity}
          </div>
        </button>
      )}
    </div>
  );
};
