import { createContext, useEffect, useState, type ReactElement } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

// const initState: ProductType[] = [];
const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type UseProductsContextType = { products: ProductType[] };
// export type UseProductsContextType2 = ProductType[] ;

const initContextState: UseProductsContextType = { products: [] };

const ProductContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
  // useEffect(() => {
  //   const fetchProductd = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });
  //     return data;
  //   };
  //   fetchProductd().then((products) => setProducts(products));
  // }, []);
  
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
