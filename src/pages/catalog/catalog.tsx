import { Link } from "react-router-dom";
import Footer from "../../compoments/footer/footer";
import Header from "../../compoments/header/header";

function Catalog():JSX.Element {
    return (
        <div className="body-container">
        <Header/>
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
        <Footer />
    </div>);
}

export default Catalog;
