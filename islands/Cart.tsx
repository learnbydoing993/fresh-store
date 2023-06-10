import createAppState from '../utils/state.ts';

export default function Cart() {
  const state = createAppState;

  const onCheckout = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = "/checkout"

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify(state.cart.value);
    form.appendChild(input);

    document.body.appendChild(form);

    localStorage.removeItem("CART");
    form.submit();
  }

  return (
    <div class="max-w-screen-xl mx-auto p-4 pt-10 text-center">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2 border-b">Product Name</th>
            <th class="px-4 py-2 border-b">Price</th>
            <th class="px-4 py-2 border-b">Quantity</th>
            <th class="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
        {state.cart.value.map(item =>
          <tr>
            <td class="px-4 py-2 border-b">{item.name}</td>
            <td class="px-4 py-2 border-b">${item.price * item.quantity}</td>
            <td class="px-4 py-2 border-b">{item.quantity}</td>
            <td class="px-4 py-2 border-b">
              <button 
              onClick={() => state.removeFromCart(item.id)}
              class="px-4 py-2 bg-red-500 text-white rounded-md">
                Remove
              </button>
            </td>
          </tr>
        )}

        <tr>
          <td class="px-4 py-2" colSpan={3}></td>
          <td class="px-4 py-2" >
            <button
            onClick={onCheckout}
            class="px-4 py-2 bg-blue-500 text-white rounded-md">
              Checkout
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}