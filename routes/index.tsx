import ItemsComponent from "../components/Items.tsx";
import Nav from "../components/Nav.tsx";
import { items } from "../utils/items.ts";

export default function HomePage() {
  return (
    <>
      <Nav />

      <ItemsComponent items={items} />
    </>
  );
}
