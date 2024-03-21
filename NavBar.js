// this file is to make a navigation bar for the website
// it is a functional component
// it also has the possibility to output a dropdown menu

function NavBar() {
    return (
        <nav>
            <ul>
                <NavElement href="#">Home</NavElement>
                <NavElement href="about.html">About</NavElement>
            </ul>
        </nav>
    );
}
var NavElement = ({ href, children }) => (<li><a href={href}>{children}</a></li>);
// the funtion above is the same as the function below
// function NavElement({ href, children }) { 
//     return (<li><a href={href}>{children}</a></li>); 
// }

function NavDropDownElement() {

}