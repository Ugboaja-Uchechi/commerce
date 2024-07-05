import Header from "../../components/Header"
import './index.css'
import Nike from "../../assets/nike.jpg";
import Vans from "../../assets/vans.jpg";
import Converse from "../../assets/converse.jpg";
import Adidas from "../../assets/adidas.png";
import ProductList from "../../components/ProductList";

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

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1 className="main-text">All Products</h1>
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
          <ProductList key={product.id} props={product} />
        ))}
        </div>
        
        {/* Display eight initially. When the button is clicked it should route to a page that displays everything */}
        <div className="btn-cover">
          <p>
            <a href="/shop">Shop All</a>
          </p>
        </div>
      </main>

      {/* Text containg names with images corresponding to each of the products going from left to right. 2 rows */}
    </>

  )
}

export default Home