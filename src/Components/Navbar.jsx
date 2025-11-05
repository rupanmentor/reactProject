import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const {cart} = useCart();
  return (
    <nav className="bg-black text-white p-4 flex justify-between font-serif">
      <Link
        to="/"
        className="text-2xl font-extrabold flex justify-evenly gap-2 hover:scale-110"
      >
        E-Cart{" "}
        <span>
          <FaShoppingBag size={30} />
        </span>
      </Link>
      <Link to="/cart">
        <button className="bg-white text-black px-4 py-2 flex justify-evenly gap-2 rounded hover:scale-110 transition w-full">
         <IoIosCart size={25} /> Cart({cart.length})
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
