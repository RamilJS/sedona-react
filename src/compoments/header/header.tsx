import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/logo";

function Header(): JSX.Element {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="page-header" data-test="header">
                <nav className="navigation">
                    <Logo />
                    <ul className="navigation-list main-navigation-list">
                        <li className="navigation-list-item">
                            <Link
                            //className="navigation-link navigation-link-current"
                            className={`navigation-link ${isActive("/") ? "navigation-link-current" : ""}`}
                            to="/"
                            aria-current="page"
                            >
                                Главная
                            </Link>
                        </li>
                        <li className="navigation-list-item">
                            <Link className="navigation-link" to="#">
                            О Седоне
                            </Link>
                        </li>
                        <li className="navigation-list-item">
                            <Link 
                            className={`navigation-link ${isActive("/catalog") ? "navigation-link-current" : ""}`}
                            to="catalog">
                            Гостиницы
                            </Link>
                        </li>
                    </ul>

                    <ul className="navigation-list navigation-user">
                        <li className="navigation-list-item">
                            <a className="button navigation-link navigation-user-link" href="#">
                            <svg
                                className="search-icon"
                                aria-hidden="true"
                                focusable="false"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19.5 18.0083L15.8 14.3287C16.8 13.0359 17.5 11.3453 17.5 9.4558C17.5 5.08011 13.9 1.5 9.5 1.5C5.1 1.5 1.5 5.17956 1.5 9.55525C1.5 13.9309 5.1 17.511 9.5 17.511C11.3 17.511 13 16.9144 14.4 15.8204L18.1 19.5L19.5 18.0083ZM9.5 15.5221C6.2 15.5221 3.5 12.837 3.5 9.55525C3.5 6.27348 6.2 3.5884 9.5 3.5884C12.8 3.5884 15.5 6.27348 15.5 9.55525C15.5 12.837 12.8 15.5221 9.5 15.5221Z" />
                            </svg>
                            <span className="visually-hidden">Поиск</span>
                            </a>
                        </li>
                        <li className="navigation-list-item">
                            <Link className="navigation-link navigation-user-link" to="#">
                            <span className="favorites visually-hidden">Избранное</span>
                            <svg
                                className="favorites-icon"
                                aria-hidden="true"
                                focusable="false"
                                width={18}
                                height={17}
                                viewBox="0 0 18 17"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.9 17C8.6 17 8.3 16.9 8.1 16.6C2.7 10.5 1.4 9.1 1.1 8.7C0.4 7.8 0 6.6 0 5.4C0 2.4 2.4 0 5.5 0C6.8 0 8 0.5 9 1.3C10 0.5 11.3 0 12.5 0C15.5 0 18 2.4 18 5.4C18 6.7 17.5 7.9 16.7 8.8L9.7 16.7C9.5 16.9 9.3 17 8.9 17ZM2.9 7.5C3.2 7.9 6.4 11.5 9 14.4L15.2 7.4C15.7 6.9 15.9 6.2 15.9 5.4C15.9 3.6 14.4 2.1 12.6 2.1C11.6 2.1 10.6 2.6 9.9 3.4C9.6 3.7 9.3 3.8 9 3.8C8.7 3.8 8.4 3.6 8.2 3.4C7.5 2.6 6.5 2.1 5.5 2.1C3.7 2.1 2.2 3.6 2.2 5.4C2.1 6.3 2.5 7 2.9 7.5C2.8 7.5 2.8 7.5 2.9 7.5Z" />
                            </svg>
                            <span className="favorites-count">12</span>
                            </Link>
                        </li>
                        <li className="navigation-list-item">
                            <Link
                                to="#"
                                className="button navigation-button navigation-user-link"
                                >
                                Хочу сюда!
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;
