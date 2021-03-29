export default ProductSection({heading, text, productArray}) {
    return(
        <section className="not-hero product-section">
        <Heading2WithParagraph
          heading={heading}
          text={text}
        />
        <div className="cupcake-grid product-grid">{productArray}</div>
      </section>
    );
}