import Header from "../../components/Header"
import './index.css'
import Nike from "../../assets/nike.jpg";
import Vans from "../../assets/vans.jpg";
import Converse from "../../assets/converse.jpg";

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
          <div className="grid-cover">
            <img src={Nike} alt="" />
          </div>

          <div className="grid-cover">
            <img src={Vans} alt="" />
          </div>

          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>

          <div className="grid-cover">
            <img src={Nike} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Nike} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Nike} alt="" />
          </div>

          <div className="grid-cover">
            <img src={Vans} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Vans} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Vans} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Vans} alt="" />
          </div>

          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>
          <div className="grid-cover">
            <img src={Converse} alt="" />
          </div>
        </div>
      </main>

      {/* Text containg names with images corresponding to each of the products going from left to right. 2 rows */}
    </>

  )
}

export default Home