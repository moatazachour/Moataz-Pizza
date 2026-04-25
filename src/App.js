const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Moataz Pizza"),
    React.createElement(Pizza, {
      name: "Margharita",
      description: "Sauce and Mozzarella",
    }),
    React.createElement(Pizza, {
      name: "Neptune",
      description: "Sauce, Mozzarella and Tuna",
    }),
    React.createElement(Pizza, {
      name: "Queen",
      description: "Sauce, Mozzarella, Ham and Mushrooms",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
