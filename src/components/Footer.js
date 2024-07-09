import React from "react";
import Logo from "../assets/Logo.png"; 
// import { Image } from "react-bootstrap";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-black pl-20 pr-20 pt-10 flex gap-20 pb-10">

      <div>
      <div>
          <img src={Logo} alt="" className="w-32" />
      </div>
        <div className="text-white  pt-5 md:flex xs:hidden">
          <LiaFacebook className=" size-10" />
          <TiSocialTwitterCircular className=" size-10" />
          <TiSocialLinkedinCircular className=" size-10" />
          <FaInstagram className=" size-10" />
        </div>
      </div>
      <div className="">
        <div className="flex justify-center gap-28">
          <div className="text-white">
            <p className=" text-xl font-bold">Contact Us</p>
            <p>Phone: +123 805 223 2843</p>
            <p>Email: Support@shopinisland.com</p>
            <p>Address: 1,Ogunlesi Street,<br></br> Awoyokun Bus Stop, <br></br> Onipanu Lagos</p>
          </div>
          <div className="text-white">
            <p className=" text-xl font-bold">Shop</p>
            <p>Living Room</p>
            <p>Bedroom</p>
            <p>Office</p>
          </div>
          <div className="text-white">
            <p className=" text-xl font-bold">About Us</p>
            <p>Who We Are</p>
            <p>Our Mission</p>
          </div>
          <div className="text-white">
            <p className=" text-xl font-bold">Legal</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
        {/* <div>
          <br />
          <div className="text-white">
            <MdCopyright />
            <p> 2024 shopinisland.ng, All rights reserved</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
