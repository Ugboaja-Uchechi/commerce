import '../pages/home/index.css'

const ProductList = ({ props }) => {
  return (
    <>
      <div className="grid-cover">
        <div className='product-relative'>
          <img src={props.img} alt="" />

          <div className='product-like'>
            <p>like</p>
          </div>
        </div>
        <div className='product-info'>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
      </div>
      
    </>
  )
}

export default ProductList