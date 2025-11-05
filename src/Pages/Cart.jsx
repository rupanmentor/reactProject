import React from "react";
import { useCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-extrabold md-4 font-serif flex justify-center items-center text-fuchsia-700">
        Cart
        <span className="w-10 h-10 object-contain">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5993/5993827.png"
            alt="cart"
          />
        </span>
      </h1>
      {cart.length === 0 ? (
        <div className="text-2xl font-extrabold font-serif mb-4 flex justify-center items-center">
          Your Cart is Empty
          <span className="w-32 h-32 object-contain">
            <img
              src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"
              alt="cart"
            />
          </span>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4 text-right font-serif">
            <p className="font-bold">Total : ${total.toFixed(2)}</p>
            <p className="font-bold text-green-600">
              Discount(10%): -${discount.toFixed(2)}
            </p>
            <p className="font-bold text-red-600">
              Final Price: ${finalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
