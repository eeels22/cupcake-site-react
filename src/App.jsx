import "./styles/style.css";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import cakesJSON from "./data/cakes.json";
import cupcakesJSON from "./data/cupcakes.json";

export default function App() {
  const CupcakesArray = cupcakesJSON.map(item => {
    return <Product key={item.id} title={item.title} price={item.price} fileName={item.fileName} alt={item.alt}/>
  });

  /*const CakesArray = cakesJSON.map(item => {
    return <Product key={item.id} title={item.title} price={item.price} fileName={item.fileName} alt={item.alt}/>
  });
  */

  return (           
    <div className="App">
      <body>
        <Header/>
        <div className="cupcake-grid product-grid">
        {CupcakesArray}
        </div>
        
        <Footer/>   
      </body>
    </div>
  );
}