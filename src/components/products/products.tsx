import { Product } from "@/types";
import { ProductCard } from ".";
import Link from "next/link";
import { shuffleArray } from "@/src/utils";

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <section className="pt-14">
      <h1 className="text-center text-gray-500 font-bold text-5xl mb-20">
        Our Products
      </h1>
      <div className="max-md:px-5 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {shuffleArray(products).map((product: Product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
      </div>
    </section>
  );
};
