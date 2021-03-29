// uses ternary operator to include an anchor tagif the link was provided
export default function H2WithParagraph({ heading, text, link, linkText }) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
      {link ? <a href={link}>{linkText}</a> : ""}
    </div>
  );
}
