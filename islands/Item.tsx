import { Item } from "../utils/items.ts";
import createAppState from '../utils/state.ts';

interface ItemProp {
  item: Item
}

export default function ItemComponent({item}: ItemProp) {
  const state = createAppState;

  return (
    <div class="bg-white shadow-md rounded-lg">
      <div class="p-4">
        <img src={item.image} alt="Product Image" class="w-full h-80 object-contain mb-4" />
        <h3 class="text-lg font-semibold">{item.name}</h3>
        <p class="text-gray-600">Price: ${item.price}</p>
      </div>

      <div class="p-4 bg-gray-100 flex justify-end">
        <button
        onClick={() => state.addToCart(item)}
        class="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}