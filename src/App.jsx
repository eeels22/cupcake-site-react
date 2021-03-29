// import css
import "./styles/style.css";
// import icons
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
// import components
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import data
//import cakesJSON from "./data/cakes.json";
import cupcakesJSON from "./data/cupcakes.json";

// adds brand icons to library so they can be referenced by icon name as a string anywhere else in our app
library.add(fab,faEnvelopeOpen);

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