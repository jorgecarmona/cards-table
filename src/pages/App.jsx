import "./app.css";

import {Card} from "../molecules";

const chips = ["wooden", "metal", "fresh", "gold", "silver", "copper"];
const colors = ["yellow", "green", "blue", "red", "pink", "orange"];
const titles = [
  "Electronic Wooden Computer",
  "Gorgeous Rubber Bacon",
  "Tasty Cotton Mouse",
  "Small Metal Bacon",
  "Fantastic Metal Chair",
  "Modern Wooden Fish"
];
const prices = [892, 167, 320, 924, 177, 787];

const cardProps = [];

function getRandomInt(max) {
  const rnd = Math.floor(Math.random() * max);
  return rnd;
}

for (let i = 0; i < 6; i++) {
  cardProps.push({
    chipTitle: chips[getRandomInt(6)],
    color: colors[getRandomInt(6)],
    title: titles[getRandomInt(6)],
    price: prices[getRandomInt(6)]
  });
}

function App() {
  return (
    <div className="app">
      {/* llamar un organismo con 3 elementos */}
      {/* llamar un organismo con 3 elementos */}

      {cardProps.map((cp) => (
        <Card chipTitle={cp.chipTitle} title={cp.title} price={cp.price} color={cp.color} />
      ))}
    </div>
  );
}

export default App;
