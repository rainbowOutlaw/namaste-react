import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 mx-auto">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
}
