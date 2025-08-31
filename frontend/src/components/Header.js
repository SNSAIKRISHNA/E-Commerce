import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({cartItems}) {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand d-flex align-items-center">
          <Link to="/"  ><img 
            width="50px"
            src="/Digitro.png" 
            alt="Digitro Logo" /></Link>

          <h6 
            style={{ 
              color: "rgba(255, 255, 255, 1)", 
              marginLeft: "6px", 
              marginBottom: 0     
            }}
          >
            Digitro
          </h6>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      
          <span id="cart" className="ml-3">
            Cart
          </span>
          <span
            className="ml-1"
          id="cart_count"
          style={{ color: "black" }}
        >
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
}
