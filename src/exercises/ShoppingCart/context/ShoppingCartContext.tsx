import { useContext, createContext, ReactNode, useState, FC } from "react";
import { Cart } from "../data/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IShoppingCartProvider {
  children: ReactNode;
}

interface ICartItem {
  id: number;
  quantity: number;
}

interface IShoppingCartContext {
  isOpenCart: () => void;
  isOpen: boolean;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: ICartItem[];
}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider: FC<IShoppingCartProvider> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "shopping-cart",
    []
  );

  const isOpenCart = () => {
    setIsOpen((prev) => !prev);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        isOpenCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <Cart />
    </ShoppingCartContext.Provider>
  );
};
