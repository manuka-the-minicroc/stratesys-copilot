import { Link } from "react-router-dom";
function Header() {

   return(<header>
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand" href="#">
                <img style={{height:"29px", width:"auto"}}  src="/images/logonew.png" alt="Stratesys Logo" height="50" />
            </Link>
        </div>
    </nav>
</header>) 
}

export default Header;