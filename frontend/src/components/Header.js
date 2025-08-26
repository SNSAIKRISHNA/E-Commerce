export default function Header() {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
  <div className="navbar-brand d-flex align-items-center">
    <img 
      width="50px"
      src="/Digitro.png" 
      alt="Digitro Logo" 
    />
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
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name "
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="cart" className="ml-3">
          Cart
        </span>
        <span className="ml-1" id="cart_count">
          2
        </span>
      </div>
    </nav>
  );
}
