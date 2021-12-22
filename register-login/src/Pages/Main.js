import "./main.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { Product } from "./Product";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ProductContext } from "../context/ProductContext.js";
import { data } from "./ProductData";
import Payment from "./Payment";

const Main = () => {
  const auth = useContext(AuthContext);
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    auth.logout();
    navigate("/");
  };
  const [payment, setPayment] = useState(false);

  return (
    <div>
      <div className="containerMain">
        <div className="header">
          <label>
            <div
              className="nav-bar"
              id="shoppingCart"
              onClick={() => setPayment(true)}
            >
              <AddShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </label>
          <div className="nav-bar" id="logout" onClick={logoutHandler}>
            Sign out
          </div>
        </div>
        <div className="main-payment">
          <div className="main">
            {data.map((product) => (
              <Product
                id={product.id}
                productName={product.productName}
                oldPrice={product.oldPrice}
                image={product.image}
                discount={product.discount}
                products={products}
                setProducts={setProducts}
              />
            ))}
          </div>
          {payment && <Payment />}
        </div>
      </div>
    </div>
  );
};

export default Main;
