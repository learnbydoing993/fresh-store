import CartCounter from "../islands/CartCounter.tsx";

export default function Nav() {

  return (
    <div class="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b-2 border-gray-200">
      <div class="text-2xl  ml-1 font-bold">
        Fresh Store
      </div>
      <ul class="flex gap-6">
        <li>
          <a
            href="/"
            class="text-gray-500 hover:text-gray-700 py-1 border-gray-500"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="/cart"
            class="text-gray-500 hover:text-gray-700 py-1 border-gray-500"
          >
            Cart
            <CartCounter />
          </a>
        </li>
      </ul>
    </div>
  );
}