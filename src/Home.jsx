import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>

       <div className='home__container'>
            <img className='home__image'src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg '/>
        <div className='home__row'>
            <Product 
            id="12314"
            title='The lean startup ' 
            price={29.99} 
            image='https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UL320_.jpg'
                rating={3}
            />
            <Product 
            id="123334"
            image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                price={32.99}
                rating={4}
                title="Logitech MK270 Wireless Keyboard"
            />
        </div>
        <div className='home__row'>
            <Product 
            id="123564"
            image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL320_.jpg "
                price={56}
                 title="Apple Pencil(2nd Generation)"   
                rating={5}
            />
            <Product 
            id="1242224"
            image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg"
                price={69.50}
                title="Logitech C920x HD PRo Webcam ,Full HD1080p/30fps..."
            />
            <Product 
            id="12314933"
            image="https://m.media-amazon.com/images/I/71wYJc19PiL._AC_UY218_.jpg"
                rating={4}
                title="TCL 32-inch 1080p Roku Smart LED TV"
                price={178}
            />
           
        </div>
        <div className='home__row'>
        <Product 
        id="9322314"
        image="https://m.media-amazon.com/images/I/61qXHwJeGVS._AC_UY218_.jpg"
            title="Insignia 32-inch Class F20 Smart HD 720p Fire TV" 
            rating={4}
            price={149.99}
        />
           
        </div>
       </div>
        
    </div>
  )
}

export default Home