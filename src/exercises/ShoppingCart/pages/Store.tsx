import { FC } from "react";
import { StoreItem } from "../data/StoreItem";
import storeItems from "../data/items.json";

export const Store: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Store</h1>
      <div className="flex justify-between flex-wrap gap-y-16">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};
