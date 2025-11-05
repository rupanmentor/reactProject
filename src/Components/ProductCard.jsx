import React from "react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();

  const inCart = cart.find((item) => item.id === product.id);

  const handleAdd = () => dispatch({ type: "ADD", payload: product });
  const handleRemove = () => dispatch({ type: "REMOVE", payload: product.id });

  return (
    <div className="p-4 rounded shadow-purple-700 shadow-2xl border hover:scale-105 transition font-serif">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />
      <h2 className="text-sm mt-2 font-semibold text-gray-900">
        {product.title}
      </h2>
      <p className="text-sm mt-0.5">
        {product.description.substring(0, 80)}...
      </p>
      <p className="font-semibold text-sm-center mt-2 text-fuchsia-600">
        Price: ${product.price}
      </p>
      <button
        onClick={inCart ? handleRemove : handleAdd}
        className={`mt-2 px-4 py-2 rounded text-white cursor-pointer ${
          inCart
            ? "bg-red-500 hover:scale-105"
            : "text-fuchsia-500 bg-black hover:scale-100"
        }`}
      >
        {inCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
