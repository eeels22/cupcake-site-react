// title and fileName are properties of the object props.
// Without curly braces you need to call props.title etc
// Add default values by passing them in the argument with the assignment operator
export default function Product({title = "Cupcake", price = 200, perUnit, fileName, alt}) {
    const imageObject = require(`../assets/cakes/${fileName}`);
    const imageURL = imageObject.default;

    return (
        <article className="product-item">
            <img
              src={imageURL}
              alt={alt}
              className="cake-image"
            />
            <span className="product-name">{title}</span>
            <span className="product-price">{price}{perUnit}</span>
        </article>
    );
}