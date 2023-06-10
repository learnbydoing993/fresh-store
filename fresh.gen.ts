// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/cart.tsx";
import * as $1 from "./routes/checkout.tsx";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/Cart.tsx";
import * as $$1 from "./islands/CartCounter.tsx";
import * as $$2 from "./islands/Item.tsx";

const manifest = {
  routes: {
    "./routes/cart.tsx": $0,
    "./routes/checkout.tsx": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/Cart.tsx": $$0,
    "./islands/CartCounter.tsx": $$1,
    "./islands/Item.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;