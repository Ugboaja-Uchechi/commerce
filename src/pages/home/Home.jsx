import Header from "../../components/Header"
import './index.css'
import ProductList from "../../components/ProductList";
import { Link } from "react-router-dom";
import Products from "../../Data/product";
import InfiniteScroll from "../../components/InfiniteScroll";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1 className="main-text">Products</h1>
        </div>

        <div className="home-flex">
          <div>
            <h3>All</h3>
          </div>
          <div>
            <h3>Shirts</h3>
          </div>
          <div>
            <h3>Shoes</h3>
          </div>
          <div>
            <h3>Trousers</h3>
          </div>
          <div>
            <h3>Hats</h3>
          </div>
        </div>

        <div className="grid-container">
          {Products.map((product) => (
            <Link key={product.id} to={`/shop/${product.name}`} className="link">
             <ProductList key={product.id} props={product} />
            </Link>
          
        ))}
        </div>
        
        {/* Display eight initially. When the button is clicked it should route to a page that displays everything */}
        <div className="btn-cover">
          <p>
            <a href="/shop">Shop All</a>
          </p>
        </div>
      </main>

      <div
        style={{
          marginBlockStart: "5rem",
          borderBlockEnd: "1px solid #000",
        }}
      ></div>

<InfiniteScroll />
      {/* Text containg names with images corresponding to each of the products going from left to right. 2 rows */}
    </>

  )
}

export default Home;