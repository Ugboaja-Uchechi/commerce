import "./scroll.css";

const InfiniteScroll = () => {
  return (
    <section>
      <div className="scroll-flex">
              <ul className='right-scroll'>
        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

 
      </ul>
      {/* aria hidden to hide content from screen readers */}
      <ul className='right-scroll' aria-hidden='true'>
        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>
      </ul>
      </div>

      <div className="scroll-flex">
              <ul className='left-scroll'>
        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

 
      </ul>
      {/* aria hidden to hide content from screen readers */}
      <ul className='left-scroll' aria-hidden='true'>
        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>

        <li className='shirt'>Shirts</li>
        <li className='shoes'>Shoes</li>
        <li className='trousers'>Trousers</li>
        <li className='hats'>Hats</li>
      </ul>
      </div>

    </section>
  )
}

export default InfiniteScroll;