import { useState } from 'react'
import './Content.css'

function Content() {
  const [images, setImages] = useState([])

  const fetchHandler = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setImages(data);
  }

  return (
    <>
      <div className='content'>
        <button id='blu-btn' onClick={fetchHandler}>Fetch Items</button>
        <div className='prod-g'>
          {images.map((prod) => {
            return (<div className='prod-p' id={prod.id}><img src={prod.image} /></div>)  })}
        </div>
      </div>
    </>
  )
}
export default Content