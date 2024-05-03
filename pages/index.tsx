import { Home } from "@/src/components";

import DATA from "../public/json/products.json";

export const getStaticProps = async () => {
  return {
    props: {
      products: DATA.products,
    },
  };
};

export default Home;
