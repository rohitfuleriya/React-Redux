import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import products from "./products.json";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="products">
        {products.map((product) => (
          <Home {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
