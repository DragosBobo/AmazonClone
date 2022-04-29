import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>

       <div className='home__container'>
            <img className='home__image'src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg '/>
        <div className='home__row'>
            <Product/>
            <Product/>
        </div>
        <div className='home__row'>
            {/* PRoduct */}
            {/* PRoduct */}
            {/* Product */}
        </div>
        <div className='home__row'>
            {/* PRoduct */}
            
           
        </div>
       </div>
        
    </div>
  )
}

export default Home