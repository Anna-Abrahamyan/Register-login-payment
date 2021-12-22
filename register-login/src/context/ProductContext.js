import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
  
};

export default ProductContextProvider;
