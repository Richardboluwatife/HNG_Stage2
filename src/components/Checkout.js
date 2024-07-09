import React, { useState } from "react";
// import { assets } from "../../assets/images/cart/assets";
import { Link } from "react-router-dom";
import Visa from "../assets/Visa.png"; 
import { FiAlertCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { products } from "../products";
import { product } from "../Prodet";
import { products1 } from "../product";

const countries = [
    { name: "Nigeria" }, { name: "USA" }, { name: "UK" }, { name: "Canada" },
];

const nigerianStates = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe",
    "Zamfara",
];

function Checkout() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const showNigerianStates = selectedCountry === "Nigeria";

    const Circle = ({ color, onClick }) => {
        return (
            <div
                className={`rounded-full w-12 h-12 mx-2 cursor-pointer bg-${color}-500`}
                onClick={onClick}
            ></div>
        );
    };

    const [selectedMethod, setSelectedMethod] = useState('');

    const handleInputChange = (value) => {
        setSelectedMethod(value);
    };

    const carts = useSelector((store) => store.cart.items);
    const formatPrice = (price) => {
        if (isNaN(price)) {
            return "₦0.00"; // Return ₦0.00 if price is NaN
        }
        return parseFloat(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const calculateTotal = () => {
        let productTotal = 0
        console.log(productTotal);

        for (let i = 0; i < carts.length; i++) {
            const cart = carts[i]
            const id = cart.productId
            const detail =
                products.find((product) => product.id === id) ||
                product.find((product) => product.id === id) ||
                products1.find((product) => product.id === id);

            productTotal = productTotal + (detail.price * cart.quantity)
        }
        console.log(productTotal);

        const delivery = 10000
        const totalPrice = productTotal + delivery
        return totalPrice;
    };

    return (
        <div>
            <div className="md:flex md:space-x-3 pb-14 md:gap-14">
                <div>
                    <h2 className="md:text-[36px] xs:text-[26px] font-semibold pb-5 pt-10 md:pl-14">
                        Check Out
                    </h2>
                    <div>
                        <p className="font-semibold md:pl-14 text-xl">Shipping Information</p>
                        <div className="md:pl-14 xs:pl-5 pt-2 pb-5 ">
                            <h1>Address</h1>
                            <div className="md:w-[710px] xs:w-[320px]">
                                <input
                                    type="text"
                                    placeholder="Winner Giant Company 16, Akubero Street Off Iyana ipaja,
                                     Lagos, Nigeria "
                                    className="white-black  placeholder:text-neutral-400 h-16 md:w-[600px] pl-5 border rounded border-gray-200 mt-5 xs:w-[380px]"
                                />
                            </div>
                        </div>
                        
                        <div className="md:flex items-center md:pl-14 md:space-x-[60px] pb-5 xs:pl-5 ">
                            

                            <div>
                                <h4>Phone Number</h4>
                                <div className="w-80">
                                    <input
                                        type="text"
                                        placeholder="+234 803 647 2837"
                                        className="white-black placeholder:text-neutral-400 border-black-400 border rounded border-gray-200 w-[600px] mt-2 h-10 pl-5"
                                    />
                                </div>
                            </div>
                        </div>

                        
                        <Link to="/">
                            <div className="pt-4 pb-5 border-b border-teal-900 w-[600px] ml-14">
                                <button className="bg-primary rounded-lg w-20 h-10 items-center bg-yellow-500">
                                    <h1 className="text-lg text-white ">Edit</h1>
                                </button>
                            </div>
                        </Link>

                        <div className="pl-14 pt-5">
                            <p className=" text-xl">Total</p>
                            <p className=" text-xl pt-2">{formatPrice(calculateTotal())}</p>
                        </div>
                        
                    </div>
                </div>

                <div className="border rounded-lg h-5/6 mt-14 xs:w-[370px] xs:ml-2 md:w-[350px] bg-teal-900">
                    <h6 className="text-[25px] font-semibold pb-2 pt-5 pl-10 text-white ">
                        Payment Method
                    </h6>

                    <div>
                        <h6 className="text-[15px] font-semibold pb-3 pt-1 pl-10 text-white ">
                            Select Payment Method
                        </h6>

                        <div className="flex flex-col gap-2 pl-10">
                            <div className={`flex items-center gap-2 text-white ${selectedMethod === 'Cash on Delivery' ? '' : ''}`}>
                                <input
                                    type="radio"
                                    id="cashOnDelivery"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    className="rounded-full text-white"
                                    checked={selectedMethod === 'Cash on Delivery'}
                                    onChange={() => handleInputChange('Cash on Delivery')}
                                />
                                <label htmlFor="cashOnDelivery">Debit Card</label>
                            </div>

                            <div className={`flex items-center gap-2 text-white $ {selectedMethod === 'Bank Transfer' ? '' : ''}`}>
                                <input
                                    type="radio"
                                    id="bankTransfer"
                                    name="paymentMethod"
                                    value="Bank Transfer"
                                    className="rounded-full text-white"
                                    checked={selectedMethod === 'Bank Transfer'}
                                    onChange={() => handleInputChange('Bank Transfer')}
                                />
                                <label htmlFor="bankTransfer">Paypal</label>
                            </div>

                        </div>
                    </div>

                    <div className="pl-10 pt-5">
                        <p className="text-white">Payment Details</p>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter name on Card"
                                className="white-black placeholder:text-neutral-400 !border-black-400 bg-transparent pt-5 border-b border-gray-300 w-64 " 
                            />

                            <input
                                type="text"
                                placeholder="Card Number"
                                className="white-black placeholder:text-neutral-400 !border-black-400 mt-5 items-center justify-center bg-transparent border-b border-gray-300 w-64" 
                            />
                        </div>

                        <div>
                            <img src={Visa} alt="" className="w-12 pt-5" />
                        </div>

                        <div className=" pt-5 flex gap-10">
                            <input
                                type="text"
                                placeholder="Expiration"
                                className="white-black placeholder:text-neutral-400 !border-black-400 bg-transparent pt-5 border-b border-gray-300 w-28"

                            />

                            <input
                                type="text"
                                placeholder="cvv"
                                className="white-black placeholder:text-neutral-400 !border-black-400 mt-5 items-center justify-center bg-transparent border-b border-gray-300 w-16"

                            />
                        </div>
                    </div>

                    <Link to="/shopping-cart">
                        <div className="pt-4 pl-10 pb-5">
                            <button className="bg-primary rounded-xl w-11/12 h-12 items-center bg-yellow-400">
                                <h1 className="text-lg text-white ">Pay</h1>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
