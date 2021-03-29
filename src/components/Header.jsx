import Nav from "Nav.jsx";
import logo from "../assets/logo-200.png";

export default function Header(){
    return(
        <header>
            <Nav/>      
            <div className="logo-div">
                <div className="linked-logo">
                <img
                    src={logo}
                    alt="logo containing an illustration of a green-iced cupcake topped with a pink heart and text reading Munammi cakery"
                    className="logo"
                /></div>
            </div>
    </header>
    );
}