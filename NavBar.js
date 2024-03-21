// this file is to make a navigation bar for the website
// it is a functional component
// it also has the possibility to output a dropdown menu
let isdropdownactive = false;
let DropDownstyle = { display: "none" };
/**
 * Renders a navigation bar.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
function NavBar() {
    return (
        <nav>
            <ul>
                <NavElement href="#">Home</NavElement>
                <NavElement href="about.html">About</NavElement>
                <NavDropDownElement><ProjectList /></NavDropDownElement>
            </ul>
        </nav>
    );
}


/**
 * Renders a list of projects in the navigation bar.
 * @returns {JSX.Element} The rendered project list component.
 */
function ProjectList() {
    return (
        <div>
            <h1 onClick={toggleDropDown}>Projects</h1>
            <ul style={DropDownstyle}>
                <NavElement href="project1.html">Project 1</NavElement>
                <NavElement href="project2.html">Project 2</NavElement>
                <NavElement href="project3.html">Project 3</NavElement>
            </ul>
        </div>
    );
}

var toggleDropDown = () => DropDownstyle = DropDownstyle.display == "none" ? { display: "block" } : { display: "none" };



var NavElement = ({ href, children }) => (<li><a href={href}>{children}</a></li>);

var NavDropDownElement = ({ children }) => (<li>{children}</li >); 