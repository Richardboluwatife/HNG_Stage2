/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
// import iconCart from '../assets/images/iconCart.png' 
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'
import Logo from '../assets/Logo.png' 
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";

import { IoIosSearch } from "react-icons/io";

const Header = () => {

  const [query, setQuery] = useState("");
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <div className=" items-center justify-center text-center pt-2">
      <header className="flex justify-between items-center mb-2 md:w-[1100px] h-14 mx-auto">
        <Link to="/" className="text-xl font-semibold xs:pl-5">
          {/* Home. */}

          <img src={Logo} alt="" className="w-28" />
        </Link>
        <div className=""></div>

        <div className="md:flex md:gap-10 xs:hidden">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            About Us
          </Link>
          <Link to="/" className="">
            Category
          </Link>
          <Link to="/" className="">
            Contact
          </Link>
        </div>

        <div className="md:flex bg-slate-200 rounded-md border-transparent xs:hidden">
          <IoIosSearch className="mt-3.5 w-8" />
          <input
            type="text"
            className="p-1  input-bar rounded-3 rounded-end-0 bg-slate-200 text-black placeholder:text-neutral-400 border-transparent "
            placeholder="       Search product"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-primary rounded-lg w-20 h-10 items-center bg-teal-900">
            <h1 className="text-lg text-white ">Search</h1>
          </button>
        </div>

        <div className="flex gap-5">
          <a href="/cart" className=" ">
          <div
            className="w-10 h-10 
            flex justify-center items-center relative"
          >
            <a href="/cart" className=" ">
              <MdOutlineShoppingCart className="size-5" />
              <p>Cart</p>
            </a>
            <span
              className="absolute right-1 bg-red-500 text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center"
            >
              {totalQuantity}
            </span>
          </div>
          </a>

          <div className="flex justify-center items-center gap-4 xs:pr-5">
            <a href="cart" className="">
              <HiOutlineUser className="size-5" />
              <p>Profile</p>
            </a>
          </div>
        </div>
      </header>

      <div className="md:hidden bg-slate-200 rounded-md border-transparent xs:flex">
        <IoIosSearch className="mt-3.5 w-8" />
        <input
          type="text"
          className="p-1  input-bar rounded-3 rounded-end-0 bg-slate-200 text-black placeholder:text-neutral-400 border-transparent "
          placeholder="       Search product"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-primary rounded-lg w-20 h-10 items-center bg-teal-900">
          <h1 className="text-lg text-white ">Search</h1>
        </button>
      </div>

    </div>
  );
}

export default Header