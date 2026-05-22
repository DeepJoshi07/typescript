import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { type UseProductsContextType } from "../context/ProductsProvider";
import { type ReactElement } from "react";
import Product from "./Product";

const ProductsList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading....</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          //memoized
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main--products">{pageContent}</main>;
  return content;
};

export default ProductsList;
