import { useParams } from "react-router-dom"


const ShopDetails = () => {
  const {name} = useParams();

  return (
    <div>shopdetails { name }</div>
  )
}

export default ShopDetails