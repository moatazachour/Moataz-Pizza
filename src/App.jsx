import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Moataz Pizza - Order Now</h1>
      <Pizza
        name="Margharita"
        description="Sauce and Mozzarella"
        image={"/public/pizzas/sicilian.webp"}
      />
      <Pizza
        name="Neptune"
        description="Sauce, Mozzarella and Tuna"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Queen"
        description="Sauce, Mozzarella, Ham and Mushrooms"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
