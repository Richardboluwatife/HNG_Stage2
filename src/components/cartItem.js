import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeProduct } from "../stores/cart";
import { products } from "../products";
import { product } from "../Prodet";
import { products1 } from "../product";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const findDetail =
      products.find((product) => product.id === productId) ||
      product.find((product) => product.id === productId) ||
      products1.find((product) => product.id === productId);

    if (findDetail) {
      setDetail(findDetail);
    }
  }, [productId]);

  useEffect(() => {
    if (detail && detail.price) {
      const itemPrice = detail.price * quantity;
      setTotalPrice(itemPrice);
    }
  }, [quantity, detail]);

  // **Remove this useEffect as it is causing incorrect subtotal calculation**
  // useEffect(() => {
  //   setSubtotal((prevSubtotal) => prevSubtotal + totalPrice);
  // }, [totalPrice]);

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity - 1 }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity + 1 }));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(productId));
  };

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  

  return (
    <div>
      <div className="flex justify-between items-center text-black p-2 border-b-2 md:w-[450px] xs:w-[100px] md:gap-10 ">
        {detail && detail.image && (
          <img src={detail.image} alt="" className="w-28 rounded-xl" />
        )}

        <div className="">
          <div className="">
            {detail && detail.name && <h3>{detail.name}</h3>}
            {detail && detail.text && <h6>{detail.text}</h6>}
          </div>
          <div className="w-60 flex justify-between gap-2">
            <button
              className="bg-teal-900 w-6 h-6 text-white"
              onClick={handlePlusQuantity}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="bg-teal-900 w-6 h-6 text-white"
              onClick={handleMinusQuantity}
            >
              -
            </button>
            {detail && detail.price && <p>₦{formatPrice(detail.price * quantity)}</p>}
          </div>
        </div>
        <button
          className="w-6 h-6 text-black text-xl font-bold"
          onClick={handleRemoveProduct}
        >
          x
        </button>
      </div>
      {/* <p>total: ₦{formatPrice(totalPrice)}</p> Render totalPrice instead of subtotal */}
    </div>
  );
};

export default CartItem;