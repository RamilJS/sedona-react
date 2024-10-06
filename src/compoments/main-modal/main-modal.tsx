
function MainModal():JSX.Element {
    return (
        <div className="modal-container modal-container-close">
            <div className="modal modal-search">
            <section className="modal-content">
                <h2 className="modal-title">Поиск гостиницы в Седоне</h2>
                <button className="modal-close-button" type="button">
                <span className="visually-hidden">Закрыть</span>
                <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M14.5 1.78 13.2.5 7.49 6.2 1.79.5.48 1.8l5.7 5.7-5.7 5.7 1.3 1.3 5.7-5.7 5.7 5.7 1.3-1.3-5.7-5.7 5.7-5.7Z" />
                </svg>
                </button>
                <form
                className="search-form"
                action="https://echo.htmlacademy.ru/"
                method="post"
                >
                <p className="field-group">
                    <label className="search-form-label" htmlFor="search-checkin">
                    Дата заезда:
                    </label>
                    <input
                    className="search-form-input input-date"
                    type="text"
                    name="search-checkin"
                    defaultValue="27 апреля 2020"
                    id="search-checkin"
                    placeholder="Укажите дату"
                    required
                    />
                    <span className="modal-field-message modal-field-message-error">
                    Мы не можем отправить вас в прошлое.
                    </span>
                </p>
                <p className="field-group">
                    <label className="search-form-label" htmlFor="search-checkin">
                    Дата выезда:
                    </label>
                    <input
                    className="search-form-input input-date"
                    type="text"
                    name="search-checkout"
                    defaultValue="1 сентября 2023"
                    id="search-checkout"
                    placeholder="Укажите дату"
                    required
                    />
                    <span className="modal-field-message">
                    На эти даты есть свободные номера. Пока есть.
                    </span>
                </p>
                <p className="field-group field-group-count">
                    <span className="search-form-option-adults">
                    <label className="search-form-label" htmlFor="search-adults">
                        Взрослые:
                    </label>
                    <span className="input-count-container">
                        <button
                        className="input-count-button input-count-button-minus"
                        type="button"
                        >
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 6v2h8h6V6Z" />
                        </svg>
                        <span className="visually-hidden">
                            Уменьшить количество взрослых
                        </span>
                        </button>
                        <input
                        className="search-form-input input-count"
                        type="number"
                        name="search-adults"
                        defaultValue={2}
                        placeholder="1"
                        id="search-adults"
                        required
                        />
                        <button
                        className="input-count-button input-count-button-plus"
                        type="button"
                        >
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M14 6H8V0H6v6H0v2h6v6h2V8h6V6Z" />
                        </svg>
                        <span className="visually-hidden">
                            Увеличить количество взрослых
                        </span>
                        </button>
                    </span>
                    </span>
                    <span className="search-form-option-kids">
                    <span className="search-form-label-kids form-label-icon">
                        <label
                        className="search-form-label search-form-label-kids"
                        htmlFor="search-kids"
                        >
                        Дети:
                        </label>
                        <span className="tooltip">
                        <button
                            className="tooltip-toggle"
                            type="button"
                            aria-labelledby="tooltip-label-date"
                        >
                            <svg
                            className="tooltip-icon"
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx={13} cy={13} r={13} />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 7h2v2h-2V7Zm2 12h-2v-9h2v9Z"
                                fill="#ffffff"
                            />
                            </svg>
                        </button>
                        <span
                            className="tooltip-text"
                            role="tooltip"
                            id="tooltip-label-date"
                        >
                            Укажите количество детей, которые будут с вами, возраст
                            которых от 6 до 18 лет. Дети до 6 лет размещаются бесплатно.
                        </span>
                        </span>
                    </span>
                    <span className="input-count-container">
                        <button
                        className="input-count-button input-count-button-minus"
                        type="button"
                        >
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 6v2h8h6V6Z" />
                        </svg>
                        <span className="visually-hidden">
                            Уменьшить количество детей
                        </span>
                        </button>
                        <input
                        className="search-form-input input-count"
                        type="number"
                        id="search-kids"
                        name="search-kids"
                        defaultValue={2}
                        placeholder="1"
                        required
                        />
                        <button
                        className="input-count-button input-count-button-plus"
                        type="button"
                        >
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M14 6H8V0H6v6H0v2h6v6h2V8h6V6Z" />
                        </svg>
                        <span className="visually-hidden">
                            Увеличить количество детей
                        </span>
                        </button>
                    </span>
                    </span>
                </p>
                <button className="button search-form-button" type="submit">
                    Найти
                </button>
                </form>
            </section>
            </div>
        </div>
    );
}

export default MainModal;
