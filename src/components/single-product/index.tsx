import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt="Product Thumbnail"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 p-4">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-gray-900 mb-2">
            ${product.price}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            {product.discountPercentage}% Discount Applied
          </p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">★★★★☆</span>
            <span className="text-gray-600">({product.rating})</span>
          </div>
          <p className="text-gray-700 mb-4">In Stock: {product.stock}</p>
          <p className="text-gray-700 mb-4">Brand: {product.brand}</p>
          <p className="text-gray-700 mb-4">Category: {product.category}</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full p-4">
          <h3 className="text-xl font-bold mb-2">More Images</h3>
          <div className="flex flex-wrap">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 max-md:mt-7"
              >
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-56 rounded-lg shadow-lg object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
