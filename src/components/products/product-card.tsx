import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white max-w-sm rounded-lg shadow-md overflow-hidden hover:bg-gray-100">
      <Image
        className="w-full h-48 object-cover"
        src={product.thumbnail}
        alt="Product image"
        width={500}
        height={500}
      />
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2 line-clamp-1">
          {product.title}
        </h5>
        <p className="text-gray-700 text-base mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-gray-900 font-bold">${product.price}</div>
          <a
            href="#"
            className="block px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
