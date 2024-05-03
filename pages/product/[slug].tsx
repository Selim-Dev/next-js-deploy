import { SingleProduct } from "@/src/components";
import DATA from "../../public/json/products.json";

export const getServerSideProps = async (cts: any) => {
  const { params } = cts;
  const product = DATA.products.find(
    (product) => product.id === Number(params.slug)
  );

  return {
    props: {
      product,
    },
  };
};

export default SingleProduct;
