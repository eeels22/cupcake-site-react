import './styles/App.css';
import Product from './components/Product';
import cakesJSON from "./data/cakes.json";
import cupcakesJSON from "./data/cupcakes.json";

export default function App() {
  const CupcakesArray = cupcakesJSON.map(item => {
    return <Product key={item.id} title={item.title} price={item.price} fileName={item.fileName}/>
  });

  const CakesArray = cakesJSON.map(item => {
    return <Product key={item.id} title={item.title} price={item.price} fileName={item.fileName}/>
  });

  return (
    <div className="App">
      <header className="App-header">
        <Product title="Red velvet" price="30" />
        <Product title="Chocolate"price="28"/>
        <Product title="Lemon drizzle"/>
      </header>
    </div>
  );
}