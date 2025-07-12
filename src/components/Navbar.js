const Navbar = (props) => {
    return (
        <div>
            <h1> {props.Navheading} </h1>
            <ul className="navbar">
                <li> <a href="#">HOME</a> </li>
                <li> <a href="#"> {props.Navabout} </a> </li>
                <li> <a href="#"> {props.Navkontak} </a> </li>
            </ul>
        </div>
    )
}

export default Navbar