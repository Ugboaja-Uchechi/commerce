import { useParams } from "react-router-dom"
import Header from "../../components/Header";
import Products from "../../Data/product";
import { useState } from "react";


const ShopDetails = () => {
  const {name} = useParams();

  // find the product that matches the name from the URL parameters
  const getProducts = Products.find((product) => product.name === name);

  const [addProduct, setAddProduct] = useState();
  const [subtractProduct, setSubtractProduct] = useState();

  return (
    <>
      <Header />
      
      <div className="flex-container">
        {getProducts && (
          <>
            <div>
              <img src={getProducts.img} alt={getProducts.name} />
            </div>

            <div>
              <h2>{getProducts.name}</h2>
              <p>{getProducts.price}</p>

              <div>
                {getProducts.description}
              </div>

              <div>
                <div>
                  <button>-</button>
                  <span></span>
                  <button>+</button>
                </div>

                <div>
                  <button>
                    Add to cart
                  </button>
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