import { Link } from "react-router-dom";

function Logo(): JSX.Element {
    return (
        <Link to="/" className="logo-link" aria-current="page">
            <img src="images/logo.svg" alt="Логотип Седона" />
        </Link>
    );
}

export default Logo;
