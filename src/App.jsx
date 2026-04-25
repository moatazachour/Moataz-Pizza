import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Moataz Pizza - Order Now</h1>
      <Pizza name="Margharita" description="Sauce and Mozzarella" />
      <Pizza name="Neptune" description="Sauce, Mozzarella and Tuna" />
      <Pizza name="Queen" description="Sauce, Mozzarella, Ham and Mushrooms" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
