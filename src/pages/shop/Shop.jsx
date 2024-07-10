import Nike from "../../assets/nike.jpg";
import Vans from "../../assets/vans.jpg";
import Converse from "../../assets/converse.jpg";
import Adidas from "../../assets/adidas.png";
import ProductList from "../../components/ProductList";
import './index.css';
import Header from "../../components/Header";

const Products = [
  {
    id: 1,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Nike
  },
  {
    id: 2,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Vans
  },
  {
    id: 3,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Converse
  },
  {
    id: 4,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Adidas
  },
  {
    id: 5,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Converse
  },
  {
    id: 6,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Nike
  },
  {
    id: 7,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Vans
  },
  {
    id: 8,
    name: "Shoe",
    price: "$50",
    description: "Good shoe",
    img: Converse
  },
];

const Shop = () => {
  return (
    <>
    <Header />
          <h1>All Products</h1>
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
            <ProductList key={product.id} props={product} />
          ))}
        </div>
      </div>

    </main>
    </>

  )
}

export default Shop