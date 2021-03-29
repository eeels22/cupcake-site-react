import H2WithParagraph from "../components/H2WithParagraph";

export default function ProductSection({heading, text, productArray, id}) {
    return(
        // should be ok if no id provided
        <section className="not-hero product-section" id={id}> 
        <H2WithParagraph
          heading={heading}
          text={text}
        />
        <div className="cupcake-grid product-grid">{productArray}</div>
      </section>
    );
}