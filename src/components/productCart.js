import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import rate from "../assets/rate.png";

const ProductCart = (props) => {
  const [addedToCart, setAddedToCart] = useState(false);
  // const [showAlreadyAddedMessage, setShowAlreadyAddedMessage] = useState(false); // State to control showing the message
  const carts = useSelector((store) => store.cart.items);
  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const productInCart = carts.find(item => item.productId === id);

    if (!productInCart) {
      dispatch(
        addToCart({
          productId: id,
          quantity: 1,
        })
      );
      setAddedToCart(true); // Set addedToCart to true when item is added to the cart
    } else {
      // Product already in cart, show the message
      console.log("Product already added to cart");
      alert("This product is already added to the cart.");
    }
  };

  const isSpecialProduct = [ 23,].includes(id); // Check if the product is in the special products list

  const itSpecialProduct = [ 24, 19, 18, 17, 1, 2, 3, 5, 6, 7 ].includes(id); // Check if the product is a special product 

  return (
    <div
      className={`bg-white p-5 rounded-xl shadow-sm $ {isSpecialProduct ? "special-product" : ""
        }`}
    >
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className={`${isSpecialProduct ? "w-full h-60 mb-14" : "w-full h-60"}`}
        />
      </Link>
      <p
        className={`${itSpecialProduct ? "pt-7 text-xl text-center font-medium" : "text-xl text-center font-medium"
          }`}
      >
        {name}
      </p>
      <div>
        <p>
          ₦<span className="text-xs font-bold">{price}</span>
        </p>
        <div>
          <img src={rate} alt="" className="w-60 h-5" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className={`bg-cyan-500 p-2 rounded-full text-sm w-72 text-center mt-5 ${addedToCart ? "bg-gray-600 cursor-not-allowed" : "hover:bg-cyan-400"
            }`}
          onClick={handleAddToCart}
          disabled={addedToCart} // Disable the button after it's been clicked
        >
          {addedToCart ? "Added to Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
