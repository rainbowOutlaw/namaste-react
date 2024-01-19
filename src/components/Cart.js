import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemsList";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="m-2 p-2 bg-black text-white rounded-md"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Cart is empty! Please add items to the cart</h1>
      )}
      <div className="w-6/12 mx-auto">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
}
