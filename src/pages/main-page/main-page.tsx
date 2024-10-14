import Header from "../../compoments/header/header";
import Footer from "../../compoments/footer/footer";

function MainPage():JSX.Element {
    return (
        <div className="body-container">
            <Header />
            <main className="main-container main-index" data-test="main">
                <div className="page-container">
                    <h1 className="visually-hidden">Город Седона</h1>
                    <section className="hero" data-test="hero">
                    <h2 className="hero-description visually-hidden">Описание города</h2>
                    <img
                        className="hero-image"
                        src="images/welcome.svg"
                        width={458}
                        height={352}
                        alt="Welcome to the gorgeous Sedona Because the Grand Canyon sucks"
                    />
                    </section>
                    <section className="hero-description">
                    <h2 className="hero-image-title">
                        Седона - небольшой городок в Аризоне, <br /> заслуживающий большего!
                    </h2>
                    <p className="hero-image-description">
                        Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!
                    </p>
                    </section>
                    <section className="advantages" data-test="advantages">
                    <h2 className="visually-hidden">Преимущества</h2>
                    <ul className="advantages-list">
                        <li className="advantages-item advantages-item-full">
                        <div className="advantages-item-container">
                            <h3 className="advantages-title">
                            Настоящий <br /> городок
                            </h3>
                            <p className="advantages-description">
                            Седона - не атракцион для <br /> туристов, там течет своя{" "}
                            <br /> жизнь
                            </p>
                        </div>
                        <img
                            className="advantages-image"
                            src="images/photo-1.jpg"
                            width={800}
                            height={385}
                            alt="Город Седона"
                        />
                        </li>
                        <li className="advantages-item">
                        <h3 className="advantages-title">
                            Небольшая <br /> площадь
                        </h3>
                        <p className="advantages-description">
                            Все достопримечательности <br /> находятся очень близко
                        </p>
                        </li>
                        <li className="advantages-item">
                        <h3 className="advantages-title">
                            Красивая <br /> дорога
                        </h3>
                        <p className="advantages-description">
                            Ехать в Седону из Лас-Вегаса <br /> совсем не скучно
                        </p>
                        </li>
                        <li className="advantages-item">
                        <h3 className="advantages-title">
                            Мало <br /> туристов
                        </h3>
                        <p className="advantages-description">
                            Большинство едет в Гранд
                            <br /> Каньон и толпится там
                        </p>
                        </li>
                        <li className="advantages-item advantages-item-full">
                        <div className="advantages-item-container">
                            <h3 className="advantages-title">
                            Там есть <br /> мост дьявола
                            </h3>
                            <p className="advantages-description">
                            Да, по нему можно пройти! <br /> Если вы осмелителсь, <br />{" "}
                            разумеется
                            </p>
                        </div>
                        <img
                            className="advantages-image"
                            src="images/photo-2.jpg"
                            width={800}
                            height={385}
                            alt="Мост дьявола"
                        />
                        </li>
                    </ul>
                    </section>
                    <section className="offer-container">
                    <h2 className="offer-title">
                        ПРИЕЗЖАЙТЕ В СЕДОНУ ОТДОХНУТЬ <br /> В КОМФОРТЕ И УЮТЕ!
                    </h2>
                    <p className="offer-description">
                        Опытный персонал и качественное обслуживание!
                    </p>
                    </section>
                    <section className="services">
                    <h2 className="services-title visually-hidden">Услуги</h2>
                    <ul className="services-list">
                        <li className="services-item">
                        <h3 className="services-description-title">ЖИЛЬЁ</h3>
                        <p className="services-description">
                            Рекомендуемм пожить <br /> в настоящем отеле, <br /> всё как в
                            кино!
                        </p>
                        </li>
                        <li className="services-item">
                        <h3 className="services-description-title">ЕДА</h3>
                        <p className="services-description">
                            Всегда заказывайте <br /> топовый фирменный бургер, <br /> вы не
                            разочаруетесь!
                        </p>
                        </li>
                        <li className="services-item">
                        <h3 className="services-description-title">СУВЕНИРЫ</h3>
                        <p className="services-description">
                            Не только китайского, <br /> но и настоящего местного <br />{" "}
                            производства!
                        </p>
                        </li>
                    </ul>
                    </section>
                    <section className="search" data-test="search">
                    <h2 className="search-title">Заинтересовались?</h2>
                    <p className="search-description">
                        Укажите предполагаемые даты поездки, <br /> и мы покажем вам лучшие
                        предложения гостиниц в Седоне
                    </p>
                    <button className="search-button" type="button">
                        Поиск гостиницы в Седоне
                    </button>
                    </section>
                    <section className="subscribe" data-test="subscribe">
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
                        <label className="subscribe-email visually-hidden">E-mail</label>
                        <input
                        type="email"
                        name="subscribe-email"
                        id="subscribe-email"
                        placeholder="Ваш e-mail"
                        required
                        />
                        <button className="button subscribe-button" type="submit">
                        Подписаться
                        </button>
                    </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;
