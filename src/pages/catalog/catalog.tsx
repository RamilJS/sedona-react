import { Link

 } from "react-router-dom";
function Catalog():JSX.Element {
    return (
    <div className="body-container">
    <header className="page-header" data-test="header">
        <nav className="navigation">
        <Link to="/" className="logo-link" aria-current="page">
            <img src="images/logo.svg" alt="Логотип Седона" />
        </Link>
        <ul className="navigation-list main-navigation-list">
            <li className="navigation-list-item">
            <Link className="navigation-link" to="/" aria-current="page">
                Главная
            </Link>
            </li>
            <li className="navigation-list-item">
            <Link className="navigation-link" to="#">
                О Седоне
            </Link>
            </li>
            <li className="navigation-list-item current-item">
            <Link
                className="navigation-link navigation-link-current"
                to="catalog"
            >
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
            <Link to="#" className="button navigation-button navigation-user-link">
                Хочу сюда!
            </Link>
            </li>
        </ul>
        </nav>
    </header>
    <main className="main-container main-inner">
        <div className="page-container">
        <h1 className="visually-hidden">Каталог</h1>
        <div className="filters-container">
            <header className="inner-header">
            <h2 className="inner-header-title">Гостиницы Седоны</h2>
            <ul className="breadcrumbs-list">
                <li className="breadcrumbs-list-item">
                <Link className="breadcrumbs-link main-page-link" to="/">
                    <svg
                    className="breadcrumbs-house-icon"
                    aria-hidden="true"
                    focusable="false"
                    width={13}
                    height={13}
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6.5 0.5L0.5 6.30006V12.5001H12.5V6.30006L6.5 0.5ZM11.5 11.5001H1.5V6.70005L6.5 1.9L11.5 6.70005V11.5001Z"
                        fill="white"
                    />
                    <path
                        d="M4.5 10.5001H5.5V8.00005H7.5V10.5001H8.5V7.00005H4.5V10.5001Z"
                        fill="white"
                    />
                    </svg>
                    <span className="visually-hidden">Главная</span>
                </Link>
                </li>
                <li className="breadcrumbs-list-item">
                <Link to="#" className="breadcrumbs-link">Гостиницы</Link>
                </li>
            </ul>
            </header>
            <section className="catalog-products">
            <h2 className="visually-hidden">Список гостиниц с фильтрами</h2>
            <form
                className="catalog-filter"
                action="https://echo.htmlacademy.ru/"
                method="get"
            >
                <fieldset className="catalog-filter-group infrastructure-group">
                <legend className="catalog-filter-title">Инфраструктура:</legend>
                <ul className="catalog-filter-list">
                    <li className="catalog-filter-item">
                    <label className="control">
                        <input
                        className="control-input visually-hidden"
                        type="checkbox"
                        name="infrastructure"
                        defaultChecked
                        />
                        <span className="radio-icon" />
                        <span className="radio-item">Бассейн</span>
                    </label>
                    </li>
                    <li className="catalog-filter-item">
                    <label className="control">
                        <input
                        className="control-input visually-hidden"
                        type="checkbox"
                        name="infrastructure"
                        defaultChecked
                        />
                        <span className="radio-icon" />
                        <span className="radio-item">Парковка</span>
                    </label>
                    </li>
                    <li className="catalog-filter-item">
                    <label className="control">
                        <input
                        className="control-input visually-hidden"
                        type="checkbox"
                        name="infrastructure"
                        />
                        <span className="radio-icon" />
                        <span className="radio-item">Wi-Fi</span>
                    </label>
                    </li>
                </ul>
                </fieldset>
                <fieldset className="catalog-filter-group house-type-group">
                <legend className="catalog-filter-title">Тип жилья:</legend>
                <ul className="catalog-filter-list">
                    <li className="catalog-filter-item">
                    <label className="control">
                        <input
                        className="control-input visually-hidden"
                        type="radio"
                        name="filter-house-type"
                        defaultValue="hotel"
                        defaultChecked
                        />
                        <span className="radio-icon" />
                        <span className="radio-item">Гостиница</span>
                    </label>
                    </li>
                    <li className="catalog-filter-item">
                    <label className="control">
                        <input
                        className="control-input visually-hidden"
                        type="radio"
                        name="filter-house-type"
                        defaultValue="motel"
                        />
                        <span className="radio-icon" />
                        <span className="radio-item">Мотель</span>
                    </label>
                    </li>
                    <li className="catalog-filter-item">
                    <label className="control">
                        <input
                        className="control-input visually-hidden"
                        type="radio"
                        name="filter-house-type"
                        defaultValue="apartments"
                        />
                        <span className="radio-icon" />
                        <span className="radio-item">Апартаменты</span>
                    </label>
                    </li>
                </ul>
                </fieldset>
                <fieldset className="catalog-filter-group price-group">
                <legend className="catalog-filter-title">Стоимость, ₽:</legend>
                <div className="price-counts">
                    <label className="price-counts-label price-counts-label-min">
                    <input
                        type="text"
                        className="price-count price-count-min"
                        defaultValue={0}
                    />
                    <span className="price-placeholder">от</span>
                    </label>
                    <label className="price-counts-label price-counts-label-max">
                    <input
                        type="text"
                        className="price-count price-count-max"
                        defaultValue={9000}
                    />
                    <span className="price-placeholder">до</span>
                    </label>
                </div>
                <div className="price-range">
                    <div className="range-scale">
                    <div className="range-bar">
                        <button className="range-toggle toggle-min" type="button">
                        <span className="visually-hidden">
                            Изменение минимальной цены
                        </span>
                        </button>
                        <button className="range-toggle toggle-max" type="button">
                        <span className="visually-hidden">
                            Изменение максимальной цены
                        </span>
                        </button>
                    </div>
                    </div>
                </div>
                </fieldset>
                <div className="filter-buttons">
                <button className="button" type="submit">
                    Применить
                </button>
                <button className="button button-reset" type="reset">
                    Сбросить
                </button>
                </div>
            </form>
            </section>
        </div>
        <section className="sorting">
            <h3 className="sorting-title visually-hidden">Сортировка:</h3>
            <p className="sorting-count">
            <span className="select-title">Найдено гостиниц:</span>
            <span className="select-count">38</span>
            </p>
            <div className="view-container">
            <select className="select-control">
                <option value="select-control-item cheap">Сначала дешевые</option>
                <option value="select-control-item expensive">
                Сначала дорогие
                </option>
                <option value="select-control-item popular">
                Сначала популярные
                </option>
            </select>
            <ul className="cards-view-list">
                <li className="cards-view-item">
                <Link
                    to="catalog.html?view=card"
                    className="button current-button"
                >
                    <span className="visually-hidden">Показать карточки</span>
                </Link>
                </li>
                <li className="cards-view-item">
                <Link to="catalog.html?view=tile" className="button">
                    <span className="visually-hidden">Показать мозаикой</span>
                </Link>
                </li>
                <li className="cards-view-item">
                <Link to="catalog.html?view=list" className="button">
                    <span className="visually-hidden">Показать список</span>
                </Link>
                </li>
            </ul>
            </div>
        </section>
        <section className="cards">
            <h2 className="cards-title visually-hidden">Список карточек</h2>
            <ul className="cards-list">
            <li className="cards-list-item">
                <Link className="card-link" to="#">
                <img
                    className="card-image"
                    src="images/hotel-1.jpg"
                    width={300}
                    height={212}
                    alt="Вид из пещеры на небо"
                />
                <h3 className="card-title">Amara Resort &amp; Spa</h3>
                </Link>
                <div className="card-wrapper">
                <p className="conditions">
                    <span className="house-type">Гостиница</span>
                    <span className="house-price">От 4000 ₽</span>
                </p>
                <p className="card-buttons">
                    <Link to="#" className="card-button details">
                    ПОДРОБНЕЕ
                    </Link>
                    <Link to="#" className="card-button favotites">
                    В ИЗБРАННОЕ
                    </Link>
                </p>
                <div className="card-rating">
                    <ul className="star-rating-list">
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    </ul>
                    <span className="card-button star-rating visually-hidden">
                    4 звезды
                    </span>
                    <span className="card-button rating-count">РЕЙТИНГ: 8.5</span>
                </div>
                </div>
            </li>
            <li className="cards-list-item">
                <Link className="card-link" to="#">
                <img
                    className="card-image"
                    src="images/hotel-2.jpg"
                    width={300}
                    height={212}
                    alt="Вид из пещеры на небо"
                />
                <h3 className="card-title">Villas at Poco Diablo</h3>
                </Link>
                <div className="card-wrapper">
                <p className="conditions">
                    <span className="house-type">Гостиница</span>
                    <span className="house-price">От 5000 ₽</span>
                </p>
                <p className="card-buttons">
                    <Link to="#" className="card-button details">
                    ПОДРОБНЕЕ
                    </Link>
                    <Link to="#" className="card-button favotites-selected">
                    В ИЗБРАННОМ
                    </Link>
                </p>
                <div className="card-rating">
                    <ul className="star-rating-list">
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    </ul>
                    <span className="card-button star-rating visually-hidden">
                    4 звезды
                    </span>
                    <span className="card-button rating-count">РЕЙТИНГ: 9.2</span>
                </div>
                </div>
            </li>
            <li className="cards-list-item">
                <Link className="card-link" to="#">
                <img
                    className="card-image"
                    src="images/hotel-3.jpg"
                    width={300}
                    height={212}
                    alt="Горы на фоне чистого неба"
                />
                <h3 className="card-title">Desert Quail Inn</h3>
                </Link>
                <div className="card-wrapper">
                <p className="conditions">
                    <span className="house-type">Гостиница</span>
                    <span className="house-price">От 2500 ₽</span>
                </p>
                <p className="card-buttons">
                    <Link to="#" className="card-button details">
                    ПОДРОБНЕЕ
                    </Link>
                    <Link to="#" className="card-button favotites">
                    В ИЗБРАННОЕ
                    </Link>
                </p>
                <div className="card-rating">
                    <ul className="star-rating-list">
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    </ul>
                    <span className="card-button star-rating visually-hidden">
                    3 звезды
                    </span>
                    <span className="card-button rating-count">РЕЙТИНГ: 6.9</span>
                </div>
                </div>
            </li>
            <li className="cards-list-item">
                <Link className="card-link" to="#">
                <img
                    className="card-image"
                    src="images/hotel-4.jpg"
                    width={300}
                    height={212}
                    alt="Горы на фоне звездного неба"
                />
                <h3 className="card-title">GreenTree Inn</h3>
                </Link>
                <div className="card-wrapper">
                <p className="conditions">
                    <span className="house-type">Гостиница</span>
                    <span className="house-price">От 1500 ₽</span>
                </p>
                <p className="card-buttons">
                    <Link to="#" className="card-button details">
                    ПОДРОБНЕЕ
                    </Link>
                    <Link to="#" className="card-button favotites">
                    В ИЗБРАННОЕ
                    </Link>
                </p>
                <div className="card-rating">
                    <ul className="star-rating-list">
                    <li className="star-rating-item" />
                    <li className="star-rating-item" />
                    </ul>
                    <span className="card-button star-rating visually-hidden">
                    2 звезды
                    </span>
                    <span className="card-button rating-count">РЕЙТИНГ: 5.0</span>
                </div>
                </div>
            </li>
            </ul>
            <div className="pagination-container">
            <ul className="pagination-list">
                <li className="pagination-item pagination-current">
                <Link className="pagination-link" to="#">
                    1
                </Link>
                </li>
                <li className="pagination-item">
                <Link className="pagination-link" to="#">
                    2
                </Link>
                </li>
                <li className="pagination-item">
                <Link className="pagination-link" to="#">
                    3
                </Link>
                </li>
                <li className="pagination-item">
                <Link className="pagination-link" to="#">
                    4
                </Link>
                </li>
                <li className="pagination-item pagination-others">
                <span>...</span>
                </li>
                <li className="pagination-item">
                <Link className="pagination-link" to="#">
                    10
                </Link>
                </li>
            </ul>
            </div>
        </section>
        <section className="subscribe-catalog" data-test="subscribe">
            <h2 className="subscribe-title">ПОДПИШИТЕСЬ НА РАССЫЛКУ</h2>
            <p className="subscribe-description">
            Точная полезная информация и никакого спама, <br /> честное
            бойскаутское!
            </p>
            <form
            className="subscribe-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            >
            <label className="visually-hidden">Email</label>
            <input
                className="subscribe-email"
                type="email"
                name="subscribe-email"
                id="subscribe-email"
                placeholder="Ваш e-mail"
                required
            />
            <button className="button subscribe-button" type="submit">
                ПОДПИСАТЬСЯ
            </button>
            </form>
        </section>
        </div>
    </main>
    <footer className="footer" data-test="footer">
        <section className="footer-social">
        <h2 className="footer-title visually-hidden">Соцсети</h2>
        <ul className="footer-social-list">
            <li className="footer-social-list-item">
            <a className="button button-social" href="https://vk.com/htmlacademy">
                <svg
                className="social-icon"
                aria-hidden="true"
                focusable="false"
                width={25}
                height={15}
                viewBox="0 0 25 15"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.1164 1.80445C24.2824 1.25845 24.1164 0.856445 23.3214 0.856445H20.6964C20.0284 0.856445 19.7204 1.20345 19.5534 1.58645C19.5534 1.58645 18.2184 4.78245 16.3274 6.85845C15.7154 7.46045 15.4374 7.65145 15.1034 7.65145C14.9364 7.65145 14.6854 7.46045 14.6854 6.91345V1.80445C14.6854 1.14845 14.5014 0.856445 13.9454 0.856445H9.81738C9.40038 0.856445 9.14938 1.16045 9.14938 1.44945C9.14938 2.07045 10.0954 2.21445 10.1924 3.96245V7.76045C10.1924 8.59345 10.0394 8.74444 9.70538 8.74444C8.81538 8.74444 6.65038 5.53345 5.36538 1.85945C5.11638 1.14445 4.86438 0.856445 4.19338 0.856445H1.56638C0.816382 0.856445 0.666382 1.20345 0.666382 1.58645C0.666382 2.26845 1.55638 5.65645 4.81138 10.1374C6.98138 13.1974 10.0364 14.8564 12.8194 14.8564C14.4884 14.8564 14.6944 14.4884 14.6944 13.8534V11.5404C14.6944 10.8034 14.8524 10.6564 15.3814 10.6564C15.7714 10.6564 16.4384 10.8484 17.9964 12.3234C19.7764 14.0724 20.0694 14.8564 21.0714 14.8564H23.6964C24.4464 14.8564 24.8224 14.4884 24.6064 13.7604C24.3684 13.0364 23.5184 11.9854 22.3914 10.7384C21.7794 10.0284 20.8614 9.26345 20.5824 8.88045C20.1934 8.38945 20.3044 8.17044 20.5824 7.73345C20.5824 7.73345 23.7824 3.30745 24.1154 1.80445H24.1164Z"
                />
                </svg>
                <span className="visually-hidden">Vkontakte</span>
            </a>
            </li>
            <li className="footer-social-list-item">
            <Link
                className="button button-social social-icon-tg"
                to="https://t.me"
            >
                <svg
                className="social-icon"
                aria-hidden="true"
                focusable="false"
                width={18}
                height={16}
                viewBox="0 0 18 16"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M16.785 0.955705L0.840489 7.1042C-0.247661 7.54126 -0.241365 8.14828 0.640845 8.41897L4.73445 9.69597L14.2058 3.72014C14.6537 3.44766 15.0629 3.59424 14.7265 3.89281L7.05283 10.8183H7.05103L7.05283 10.8192L6.77045 15.0387C7.18413 15.0387 7.36669 14.8489 7.59871 14.625L9.58705 12.6915L13.7229 15.7464C14.4855 16.1664 15.0332 15.9506 15.2229 15.0405L17.9379 2.2453C18.2158 1.13107 17.5126 0.626562 16.785 0.955705Z" />
                </svg>
                <span className="visually-hidden">Telegram</span>
            </Link>
            </li>
            <li className="footer-social-list-item">
            <Link
                className="button button-social social-icon-youtube"
                to="https://www.youtube.com"
            >
                <svg
                className="social-icon"
                aria-hidden="true"
                focusable="false"
                width={23}
                height={18}
                viewBox="0 0 23 18"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M18.9402 0.356445H3.50738C1.64668 0.356445 0.333252 1.9502 0.333252 3.75645V13.8502C0.333252 15.7627 1.64668 17.3564 3.50738 17.3564H19.1591C20.8009 17.3564 22.3333 15.7627 22.3333 13.9564V3.75645C22.1143 1.9502 20.8009 0.356445 18.9402 0.356445ZM7.99494 12.8939V4.81894L15.3283 8.85645L7.99494 12.8939Z" />
                </svg>
                <span className="visually-hidden">YouTube</span>
            </Link>
            </li>
        </ul>
        </section>
        <a className="footer-contacts-phone" href="tel:+78121234567">
        +7 (812) 123-45-67
        </a>
    </footer>
    </div>);
}

export default Catalog;
