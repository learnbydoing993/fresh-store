import createAppState from '../utils/state.ts';

export default function CartCounter() {
  const state = createAppState;

  const count = state.cart.value.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {count > 0 ? (
      <span class="bg-red-500 text-white text-xs rounded-full px-2 py-1">
        {count}
      </span>
      ) : (
        <span></span>
      )}
    </>
  );
}