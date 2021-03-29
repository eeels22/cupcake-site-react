// title and fileName are properties of the object props. Without curly braces you need to call props.title etc
export default function Product({title = "Cupcake", price = 25, fileName}) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{price}kr</p>
        </article>
    );
}