import Nike from "../../assets/nike.jpg";
import Vans from "../../assets/vans.jpg";
import Converse from "../../assets/converse.jpg";
import Adidas from "../../assets/adidas.png";
import ProductList from "../../components/ProductList";
import './index.css';
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Products = [
  {
    id: 1,
    name: "Shoe1",
    price: "$50",
    description: "Good shoe",
    img: Nike
  },
  {
    id: 2,
    name: "Shoe2",
    price: "$50",
    description: "Good shoe",
    img: Vans
  },
  {
    id: 3,
    name: "Shoe3",
    price: "$50",
    description: "Good shoe",
    img: Converse
  },
  {
    id: 4,
    name: "Shoe4",
    price: "$50",
    description: "Good shoe",
    img: Adidas
  },
  {
    id: 5,
    name: "Shoe5",
    price: "$50",
    description: "Good shoe",
    img: Converse
  },
  {
    id: 6,
    name: "Shoe6",
    price: "$50",
    description: "Good shoe",
    img: Nike
  },
  {
    id: 7,
    name: "Shoe7",
    price: "$50",
    description: "Good shoe",
    img: Vans
  },
  {
    id: 8,
    name: "Shoe8",
    price: "$50",
    description: "Good shoe",
    img: Converse
  },
];

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