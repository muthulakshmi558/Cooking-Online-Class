import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import logo from "../assets/images/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#D57A66] text-white px-6 py-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Flavour Theory Logo" className="w-38 h-[110px] h-auto" />
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-bold uppercase mb-2">Home</h4>
          <a href="/about">About Us</a>
          <a href="">Programs</a>
          <a href="/courses">Courses</a>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-bold uppercase mb-2">Courses</h4>
          <a href="#">The Good Gut Program</a>
          <a href="#">Food Look Good</a>
          <a href="#">Strat Your Business - Non Veg & Veg</a>
          <a href="#">Strat Your Business - Veg Only</a>
          <a href="#">Immunity Booster Recipes</a>
          <a href="#">India’s Favourites - Style Dishes</a>
          <a href="#">Vegetarian’s Delight</a>
          <a href="#">Garnishing & Plating</a>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="font-bold uppercase mb-2">Contact</h4>
          <p className="flex items-start gap-2">
            <MapPin size={18} /> FloverTheory Acadamy<br />
            1234, Olive Street, <br />
            Chennai - 021
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> Info@Flovertheoryacadamy.In
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} /> 044-987 6785 5677
          </p>

          <div className="mt-4">
            <h4 className="font-bold uppercase mb-2">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Instagram className="hover:scale-110 transition" />
              <FaGoogle className="hover:scale-110 transition" />
              <Facebook className="hover:scale-110 transition" />
              <Youtube className="hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
