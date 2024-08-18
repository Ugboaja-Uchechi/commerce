import ProductList from "../../components/ProductList";
import './index.css';
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Products from "../../Data/product";


const Shop = () => {
  return (
    <>
    <Header />
          <h1 className="main-text">All Products</h1>
        <main className="shop-main">

      <div className="shop-cover">
        <div className="shop-filter">
          <h3>All</h3>
          <h3>Shirts</h3>
          <h3>Shoes</h3>
          <h3>Trousers</h3>
          <h3>Hats</h3>
        </div>

              <div className="grid-container shop-grid">
          {Products.map((product) => (
            <Link key={product.id} to={`/shop/${product.name}`} className="link">
              <ProductList props={product} />
            </Link>
            
          ))}
        </div>
      </div>

    </main>
    </>

  )
}

export default Shop