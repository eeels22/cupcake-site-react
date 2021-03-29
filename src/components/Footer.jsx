import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="grid-footer">
      <a
        href="https://www.instagram.com/munamii.cakery/"
        className="footer-link"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
        <span className="social-icon"></span>Instagram
      </a>
      <a
        href="https://www.facebook.com/munamiicupcakes/"
        className="footer-link"
      >
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        <span className="social-icon"></span>Facebook
      </a>
      <a
        href="mailto:softwaredevelopmentacademy@gmail.com"
        className="footer-link"
      >
        <FontAwesomeIcon icon="envelope-open" />
        <span className="social-icon"></span>Email
      </a>
    </footer>
  );
}
