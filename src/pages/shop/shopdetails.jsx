import { useParams } from "react-router-dom"
import Header from "../../components/Header";
import Products from "../../Data/product";
import { useState } from "react";


const ShopDetails = () => {
  const {name} = useParams();

  // find the product that matches the name from the URL parameters
  const getProducts = Products.find((product) => product.name === name);

  const [count, setCount] = useState(1);

  const addProducts = () => {
    setCount((prev) => prev + 1)
  }

  const subtractProducts = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
    }
  }

  return (
    <>
      <Header />
      
      <div className="flex-container">
        {getProducts && (
          <div className="flex-cover">
            <div>
              <img src={getProducts.img} alt={getProducts.name} />
            </div>

            <div>
              <h2 className="name">{getProducts.name}</h2>
              <p className="price">{getProducts.price}</p>

              <div>
                <p className="description">
                  {getProducts.description} 
                </p>
              </div>

              <div className="btn-container">
                <div className="btns-cover">
                  <button onClick={subtractProducts}>-</button>
                  <span>{count}</span>
                  <button onClick={addProducts}>+</button>
                </div>

                <div>
                  <button className="btn">
                    Add to cart
                  </button>
                </div>
              </div>

            </div>
          </div>

        )}

      </div>
    </>
  )
}

export default ShopDetails;