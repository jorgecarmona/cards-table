import "./app.css";

import {JCButton, JCLoaderButton} from "../atoms";

function App() {
  return (
    <div className="app">
      <div className="products">aqui van los productos</div>
      <div className="action">
        <JCButton text="test" color="orange" size="sm" />
        <JCButton text="test" color="yellow" size="md" />
        <JCButton text="test" color="blue" size="lg" />
        <JCLoaderButton text="Load More" />
      </div>
    </div>
  );
}

export default App;
