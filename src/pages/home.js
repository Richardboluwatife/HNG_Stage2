import React from 'react'
import { products } from '../products'
import { product } from '../Prodet';
import ProductCart from '../components/productCart'
import bgpic from "../assets/bgpic.png"; 
import { products1 } from '../product';
import Frame from '../assets/Frame.png'
import Frame1 from '../assets/Frame1.png'

const Home = () => {
  return (
    <div className=" pb-10">
      <div>
        <div className=" pb-40">
          <img src={bgpic} alt="" className="w-[2900px] h-[450px] absolute" />
          <div className="text-center relative text-white pt-[170px]">
            <h1 className=" text-3xl font-bold">FANCY AND LUXURIOUS  </h1>
            <h1 className="text-3xl font-bold">CHAIRS</h1>
            <p className=' text-[15px]'> So comfortable and soft</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl my-5 pt-14 text-center font-bold">
        AMAZING LIST OF CHAIR
      </h1> 
      <p className="text-center pb-10">See our amazing list of chair</p>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 smmd:grid-cols-2 xs:grid-cols-2 gap-5 md:pl-20 md:pr-20">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
      <h1 className="text-3xl my-5 pt-10 text-center font-bold">
        NEW MODERN REST
      </h1>
      <p className="text-center pb-10">
        Discover our exclusive collection of Stylish Home and Living Chairs.
      </p>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 smmd:grid-cols-2 xs:grid-cols-2 gap-5 md:pl-20 md:pr-20 ">
        {product.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
      <h1 className="text-3xl my-5 pt-10 text-center font-bold">
        Colorful Chairs
      </h1>
      <p className="text-center pb-10">
        Discover our special collection of colorful Chairs.
      </p>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 smmd:grid-cols-2 xs:grid-cols-2 md:gap-5 md:pl-20 md:pr-20  ">
        {products1.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>

      <div className=' pt-10 pb-10'>
          <img src={Frame } alt="" className="w-[1500px] h-[300px] md:block xs:hidden" />
        <img src={Frame1} alt="" className="w-[400px] h-[400px] md:hidden xs:block" />
      </div>
    </div>
  );
}

export default Home