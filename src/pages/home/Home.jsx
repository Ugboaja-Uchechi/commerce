import Header from "../../components/Header"
import './index.css'


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

        </div>
      </main>

      {/* Text containg names with images corresponding to each of the products going from left to right. 2 rows */}
    </>

  )
}

export default Home