"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/redux/reducers/cartSlice";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  // Add any other properties you have in your ItemType
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => {
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
    <div className="shadow-lg rounded-md bg-white overflow-hidden" key={id}>
      <img
        src="https://th.bing.com/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?rs=1&pid=ImgDetMain"
        alt={name}
        className="h-60 w-full mb-4"
      />
      <div className="p-2">
        <a href={`/products/${id}`} className="text-xl">
          {name}
        </a>
        <p className="text-red-500 text-xl">${price}</p>
      </div>
      {productInCart ? (
        <div className="flex bg-gray-500 w-full text-white">
          <button
            type="button"
            onClick={handleDecrease}
            className="border border-blue-300 mr-3 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
          >
            -
          </button>
          <span className="block mr-3 text-left">{productInCart.quantity}</span>
          <button
            type="button"
            onClick={handleIncrease}
            className="border border-blue-300 text-blue-500 rounded-md h-7 w-7 hover:border-blue-500"
          >
            +
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-blue-400 w-full hover:bg-blue-600 text-white py-2 px-8"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
