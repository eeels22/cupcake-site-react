export default function PageIntro({title, text, linkURL, linkText}) {
    return(        
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <a href={linkURL}>{linkText}</a>
        </div>
    );
}