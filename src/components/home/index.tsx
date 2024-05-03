import { useEffect, useState } from "react";
import { Products } from "..";
import { Product } from "@/types";

export const Home = ({ products }: { products: Product[] }) => {
  const [isMounting, setIsMounting] = useState(false);

  useEffect(() => {
    setIsMounting(true);
  }, []);
  if (!isMounting) {
    return null;
  }
  return (
    <div className="flex-1 container mx-auto">
      <Products products={products} />
    </div>
  );
};
