import { useParams } from "react-router-dom"
import Header from "../../components/Header";
import Products from "../../Data/product";
import { useState } from "react";
import { useCart } from "../../util/usecart";


const ShopDetails = () => {
  const {name} = useParams();

  // find the product that matches the name from the URL parameters
  const getProducts = Products.find((product) => product.name === name);

  const [count, setCount] = useState(1);

  const { addToCart } = useCart();

  const addProducts = () => {
    setCount((prev) => prev + 1)
  }

  const subtractProducts = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({
      id: getProducts.id,
      name: getProducts.name,
      price: getProducts.price,
      quantity: count,
    });
  };

  return (
    <>
      <Header />
      
      <div className="flex-container">
        {getProducts && (
          <>
            <div className="flex-cover">
              <div>
                <img src={getProducts.img} alt={getProducts.name} />
              </div>

            </div>
              
            <div className="flex-cover">
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
                  <button className="btn" onClick={handleAddToCart}>
                    Add to cart
                  </button>
                </div>
              </div>

            </div>
          </div>
          </>


        )}

      </div>
    </>
  )
}

export default ShopDetails;