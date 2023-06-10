import type { Handlers } from "$fresh/server.ts";
import { CartItem } from "../utils/state.ts";
import { stripe } from "../utils/stripe.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const form = await req.formData();
    const formData = form.get('data') as string;
    const cartItems: CartItem[] = JSON.parse(formData);

    const {url} = await stripe.checkout.sessions.create({
      line_items: cartItems.map(item => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:8000",
      cancel_url: "http://localhost:8000/cart",
    })

    const headers = new Headers();
    headers.set("location", url!);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};