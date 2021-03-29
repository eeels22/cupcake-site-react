// import css
import "./styles/style.css";
// import fontawesome components
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
// import my components
import Header from "./components/Header";
import PageIntro from "./components/PageIntro";
import Product from "./components/Product";
import Heading2WithParagraph from "./components/Heading2WithParagraph";
import Footer from "./components/Footer";
// import data
import cakesJSON from "./data/cakes.json";
import cupcakesJSON from "./data/cupcakes.json";

// adds brand icons to library so they can be referenced by icon name as a string anywhere else in our app
library.add(fab, faEnvelopeOpen);

export default function App() {
  const CupcakesArray = cupcakesJSON.map((item) => {
    return (
      <Product
        key={item.id}
        title={item.title}
        price={item.price}
        perUnit=" kr for 6"
        fileName={item.fileName}
        alt={item.alt}        
      />
    );
  });

  const cakesArray = cakesJSON.map(item => {
    return <Product 
    key={item.id} 
    title={item.title} 
    price={item.price} 
    perUnit=" kr"
    fileName={item.fileName} 
    alt={item.alt}/>
  });


  return (
    <div className="App">
      <body>
        <Header />
        <section className="not-hero products-intro-section">
          <PageIntro
            title="Our products"
            text="Feast your eyes on our scrumptious cupcakes and showstopping wedding
          cakes."
            linkURL="#wedding-cake-section"
            linkText="Skip to wedding cakes"
          />
        </section>
        <section className="not-hero product-section">
          <Heading2WithParagraph
            heading="Cupcakes"
            text="Our cupcakes are a perfect treat for yourself or a special way to let a loved one know you're thinking of them. With six cupcakes in each order, you can spread the joy further. Yum!"
          />
          <div className="product-grid">{CupcakesArray}</div>
        </section>
        <section className="not-hero product-section">
          <Heading2WithParagraph
            heading="Wedding cakes"
            text="On your special day, you can trust us to deliver a masterpiece to wow your guest. Whatever your wedding theme, we have a creation to suit."
          />
          <div className="product-grid">{cakesArray}</div>
        </section>
        <hr />
        <Heading2WithParagraph
          className="not-hero"
          heading="How to order"
          text="Head over to our Contact page to enquire about a product. We would love to hear from you!"
        />
        <Footer />
      </body>
    </div>
  );
}
