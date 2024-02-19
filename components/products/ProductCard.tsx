"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/reducers/cartSlice";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  // Add any other properties you have in your ItemType
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const productInCart = useSelector((state: any) =>
    state.cart.items.find((item: any) => item.id === id)
  );

  return (
    <div className="bg-gray-100 rounded-md overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={`/images/products/${image}`}
          alt={name}
          className="h-60 w-full p-2 object-fit"
        />
        {productInCart && (
          <span className="absolute top-2 right-2 bg-green-500 text-white py-1 px-2 rounded-full">
            {productInCart.quantity} in Cart
          </span>
        )}
        <span className="absolute text-xs top-2 left-2 bg-gray-300 text-gray-600 py-1 px-2 rounded-full">
          Electronics
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-900 hover:underline">
          <a href={`/products/${id}`}>{name}</a>
        </h2>
        <p className="text-gray-700 text-lg">
          <span className="text-orange-500">${price.toFixed(2)}</span>
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-gray-300 text-2xl">&#9733;</span>
            <span className="text-gray-300 text-2xl">&#9733;</span>
          </div>
          <div className="flex items-center">
            {productInCart ? (
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-blue-900"
                >
                  -
                </button>
                <span className="mx-3 text-lg">{productInCart.quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-blue-900"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleAddToCart}
                className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
