import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem'; // Assuming CartItem component is properly defined
import { toggleStatusTab } from '../stores/cart';
import { Link } from 'react-router-dom';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Helper function to format currency
  const formatPrice = (price) => {
    if (isNaN(price)) {
      return '₦0.00'; // Return ₦0.00 if price is NaN
    }
    return parseFloat(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Calculate the total price for the cart items
  const calculateTotalCartPrice = () => {
    if (cartItems.length === 0) {
      return 0; // Return 0 if the cart is empty
    }

    return cartItems.reduce((total, item) => {
      // Ensure that item.price and item.quantity are numbers
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return total + (price * quantity);
    }, 0);
  };

  // Calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0);
  };

  // Calculate total by adding delivery fee to subtotal
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    if (!isNaN(subtotal)) {
      const deliveryFee = 10000; // Example delivery fee
      return subtotal + deliveryFee;
    } else {
      console.error("Error calculating subtotal. Please check item prices.");
      return 0;
    }
  };

  // Format the total price
  const formattedTotalPrice = formatPrice(calculateTotalCartPrice());

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className="bg-zinc-100 md:pl-28 md:flex">
      <div className=" right-0 w-[500px] h-full grid grid-rows-[60px_1fr_60px]">
        <h2 className="p-5 text-black text-2xl">My Cart</h2>
        {carts.length === 0 ? (
          <div className="p-5">
            <p className='text-xl'>Cart is empty</p>
            <Link to="/" className="text-xl font-semibold">
              <button className="bg-cyan-500 text-black mt-16 mb-[87px] w-44 h-10 rounded-lg">
                Keep Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div>
              <div className='md:flex justify-between gap-52'>
                <div className="p-5">
                  {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                  ))}
                </div>

                <div>
                    <div className="md:w-[320px] h-[260px] border border-gray-300 rounded-l-lg rounded-r-lg p-4 bg-teal-900 xs:w-[390px] xs:mt-5">
                    <h1 className="font-semibold mb-2 text-white">Summary</h1>

                    <div className="flex items-center justify-between border-b border-gray-300 text-gray-600 text-sm py-3">
                      {/* <p className='text-white'>Subtotal:</p> */}
                        <p className="text-primary font-semibold  text-white">
                          {/* <p>Total Price: ₦{formattedTotalPrice}</p> Display the total price */}
                          <p>Total Price: ₦{formattedTotalPrice} </p> 
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 text-gray-600 text-sm py-3">
                      <p className='text-white'>Delivery:</p>
                        <p className='text-white'>₦10,000.00</p>
                    </div>
                    <div className="flex items-center justify-between text-gray-600 text-sm py-3">
                        <p className='text-white'>Total:</p>
                        <p className="text-primary font-semibold text-white">
                        ₦{calculateTotal().toFixed(2)}
                      </p>
                    </div>
                    <Link to="/checkout">
                      <button className="w-full text-white bg-primary rounded-lg py-[8px] mt-4 bg-yellow-400 font-medium">
                        CHECK OUT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartTab;
