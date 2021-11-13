import '..src';

function App() {
  return (
    <body>

    <div className="container">

      <header className="header">
        <div className="header__title">
          Список заказов
        </div>
        <div className="header__switch">
          <button className="button button_transparent button_switch" >
            <svg className="header__switch-light-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="4"/>
            <path d="M15 9L16 8L15 7H13V9H15Z"/>
            <path d="M1 9L0 8L1 7H3V9H1Z"/>
            <path d="M7 15L8 16L9 15V13H7V15Z"/>
            <path d="M7 1L8 0L9 1V3H7V1Z"/>
            <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"/>
            <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z"/>
            <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"/>
            <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"/>
            </svg>
            <span className="header__switch_text">Светлая тема</span>
        </button>
        </div>
      </header>

      <div className="service">
        <div className="service__wrapper">
          <div className="service__searchbar">
            <div className="service__searchbar-group">
              <form className="service__searchbar-form">
                <div className="service__searchbar-field">
                  <input className="service__searchbar-input" placeholder="Номер заказа или ФИО" />
                  <svg className="service__searchbar-icon" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"/>
                  </svg>
                </div>
              </form>
            </div>
            <div className="service__searchbar-filters">
              <button className="button">
                <svg className="service__searchbar-filters-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z"/>
                </svg>
                <span className="service__searchbar-filters-text">Фильтры</span>
              </button>
            </div>
            <div className="service__searchbar-reset">
              <button type="reset" className="button button_transparent button_reset" >
                <span className="service__searchbar-reset-text">Сбросить фильтры</span>
              </button>
            </div>
          </div>
          <div className="service__loading">
            <button className="button button_transparent button_disabled" disabled>
              <svg className="service__loading-icon" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11"/>
              <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5"/>
              <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75"/>
              <path d="M11.5 6.5L13.5 8.5L15.25 6.25"/>
              </svg>
              <span className="service__loading-text">Загрузка</span>
            </button>
          </div>
        </div>

        <div className="service__filters">
          <form className="service__filters-form">
            <div className="service__filters-item">
              <label className="service__filters-date-label">
                <div className="service__filters-date-text">Дата оформления</div>
                <div className="service__filters-date">
                  <div className="service__filters-date-wrapper">
                    <span className="service__filters-date-input-text">с</span>
                    <input className="service__filters-date-input" placeholder="dd.mm.yyyy" value="20.01.2021" />
                    <button className="service__filters-clear-button">
                      <svg className="service__filters-clear-icon" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"/>
                      </svg>
                    </button>
                  </div>
                  <div className="service__filters-date-wrapper">
                    <span className="service__filters-date-input-text">по</span>
                    <input className="service__filters-date-input" placeholder="dd.mm.yyyy" />
                  </div>
                </div>
              </label>
            </div>
            <div className="service__filters-item">
              <label className="service__filters-status-label">
                <div className="service__filters-status-text">
                  Статус заказа
                </div>
                <div className="service__filters-status-field">
                  <input className="service__filters-status-input" value="Любой" placeholder="Выберите статус заказа" />
                  <button className="service__filters-status-button">
                    <svg className="service__filters-status-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z"/>
                    </svg>
                  </button>
                  <div className="dropdown">
                    <ul className="dropdown__list">

                      <li className="dropdown__item">
                        <label className="dropdown__checkbox-label">
                          <input type="checkbox" className="dropdown__checkbox-input" />
                          <div className="dropdown__checkbox-group">
                            <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                            <span className="dropdown__checkbox-text">Новый</span>
                          </div>
                        </label>
                      </li>
            
                      <li className="dropdown__item">
                        <label className="dropdown__checkbox-label">
                          <input type="checkbox" className="dropdown__checkbox-input" />
                          <div className="dropdown__checkbox-group">
                            <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                            <span className="dropdown__checkbox-text">Рассчет</span>
                          </div>
                        </label>
                      </li>
            
                      <li className="dropdown__item">
                        <label className="dropdown__checkbox-label">
                          <input type="checkbox" className="dropdown__checkbox-input" />
                          <div className="dropdown__checkbox-group">
                            <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                            <span className="dropdown__checkbox-text">Подтвержден</span>
                          </div>
                        </label>
                      </li>
            
                      <li className="dropdown__item">
                        <label className="dropdown__checkbox-label">
                          <input type="checkbox" className="dropdown__checkbox-input" />
                          <div className="dropdown__checkbox-group">
                            <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                            <span className="dropdown__checkbox-text">Отложен</span>
                          </div>
                        </label>
                      </li>
            
                      <li className="dropdown__item">
                        <label className="dropdown__checkbox-label">
                          <input type="checkbox" className="dropdown__checkbox-input" />
                          <div className="dropdown__checkbox-group">
                            <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                            <span className="dropdown__checkbox-text">Выполнен</span>
                          </div>
                        </label>
                      </li>
            
                      <li className="dropdown__item">
                        <label className="dropdown__checkbox-label">
                          <input type="checkbox" className="dropdown__checkbox-input" />
                          <div className="dropdown__checkbox-group">
                            <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                            </svg>
                            <span className="dropdown__checkbox-text">Отменен</span>
                          </div>
                        </label>
                      </li>
            
                    </ul>
                  </div>
                </div>
              </label>
            </div>
            <div className="service__filters-item">
              <label className="service__filters-sum-label">
                <div className="service__filters-sum-text">Сумма заказа</div>
                <div className="service__filters-sum">
                  <div className="service__filters-sum-wrapper">
                    <span className="service__filters-sum-input-text">от</span>
                    <input className="service__filters-sum-input" value="5000" />
                    <button className="service__filters-clear-button">
                      <svg className="service__filters-clear-icon" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"/>
                      </svg>
                    </button>
                  </div>
                  <div className="service__filters-sum-wrapper">
                    <span className="service__filters-sum-input-text">до</span>
                    <input className="service__filters-sum-input" />
                  </div>
                </div>
              </label>
            </div>
            <div className="service__filters-item service__filters-item_apply">
              <button className="button button_transparent button_apply" >
                <span className="service__filters-apply-text">Применить</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="table">
        <div className="table__header">
          <div className="table__header-wrapper">
            <ul className="table__header-list">
              <li className="table__header-item table__header-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__header-item table__header-item-number">
                #
              </li>
              <li className="table__header-item table__header-item-date table__header-item-active">
                <span className="table__header-title">Дата</span>
                <svg className="table__header-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z"/>
                </svg>
              </li>
              <li className="table__header-item table__header-item-status">
                <span className="table__header-title">Статус</span>
                <svg className="table__header-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z"/>
                </svg>
              </li>
              <li className="table__header-item table__header-item-items">
                <span className="table__header-title">Позиций</span>
                <svg className="table__header-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z"/>
                </svg>
              </li>
              <li className="table__header-item table__header-item-sum">
                <span className="table__header-title">Сумма</span>
                <svg className="table__header-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z"/>
                </svg>
              </li>
              <li className="table__header-item">
                ФИО покупателя
              </li>
            </ul>
          </div>
        </div>
        
        <div className="table__body">
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                1270989
              </li>
              <li className="table__body-item table__body-item-date">
                15.02.2021, 18:00
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                <svg className="table__body-status-icon-new" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="4"/>
                </svg>
                </div>
                <span className="table__body-title">Новый</span>
              </li>
              <li className="table__body-item table__body-item-items">
                6
              </li>
              <li className="table__body-item table__body-item-sum">
                101 907 ₽
              </li>
              <li className="table__body-item">
                Чернышев Филипп Семёнович
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                2353474
              </li>
              <li className="table__body-item table__body-item-date">
                12.03.2021, 05:15
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                <svg className="table__body-status-icon-new" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="4"/>
                </svg>
                </div>
                <span className="table__body-title">Новый</span>
              </li>
              <li className="table__body-item table__body-item-items">
                2
              </li>
              <li className="table__body-item table__body-item-sum">
                98 003 ₽
              </li>
              <li className="table__body-item">
                Филиппов Степан Васильевич
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                1103397
              </li>
              <li className="table__body-item table__body-item-date">
                03.02.2021, 08:04
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                <svg className="table__body-status-icon-payment" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="4"/>
                </svg>
                </div>
                <span className="table__body-title">Рассчет</span>
              </li>
              <li className="table__body-item table__body-item-items">
                5
              </li>
              <li className="table__body-item table__body-item-sum">
                3 800 ₽
              </li>
              <li className="table__body-item">
                Тихонова Алина Давидовна
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                6924662
              </li>
              <li className="table__body-item table__body-item-date">
                21.01.2021, 13:32
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-completed" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-completed">Выполнен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                1
              </li>
              <li className="table__body-item table__body-item-sum">
                5 700 ₽
              </li>
              <li className="table__body-item">
                Александрова Юлия Никитична
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                2200086
              </li>
              <li className="table__body-item table__body-item-date">
                19.01.2021, 10:28
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-canceled" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 12.5L3.5 3.5"/>
                  <circle cx="8" cy="8" r="6.5"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-canceled">Отменен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                -
              </li>
              <li className="table__body-item table__body-item-sum">
                -
              </li>
              <li className="table__body-item">
                Андрей
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                2842064
              </li>
              <li className="table__body-item table__body-item-date">
                04.01.2021, 12:12
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-postponed" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="4"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-canceled">Отложен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                1
              </li>
              <li className="table__body-item table__body-item-sum">
                20 500 ₽
              </li>
              <li className="table__body-item">
                Судакова Анастасия Ильинична
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                1730071
              </li>
              <li className="table__body-item table__body-item-date">
                17.12.2020, 22:45
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-completed" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-completed">Выполнен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                1
              </li>
              <li className="table__body-item table__body-item-sum">
                1 399 ₽
              </li>
              <li className="table__body-item">
                Зверева Арина Николаевна
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                7987376
              </li>
              <li className="table__body-item table__body-item-date">
                07.12.2020, 08:57
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-completed" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-completed">Выполнен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                3
              </li>
              <li className="table__body-item table__body-item-sum">
                117 810 ₽
              </li>
              <li className="table__body-item">
                Карташов Максим Кириллович
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                1373265
              </li>
              <li className="table__body-item table__body-item-date">
                15.11.2020, 14:26
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-completed" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-completed">Выполнен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                1
              </li>
              <li className="table__body-item table__body-item-sum">
                17 008 ₽
              </li>
              <li className="table__body-item">
                Васильев Вадим Даниилович
              </li>
            </ul>
          </div>
          <div className="table__body-wrapper">
            <ul className="table__body-list">
              <li className="table__body-item table__body-item-check">
                <label className="dropdown__checkbox-label">
                  <input type="checkbox" className="dropdown__checkbox-input" />
                  <div className="dropdown__checkbox-group">
                    <svg className="dropdown__checkbox-icon" viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                </label>
              </li>
              <li className="table__body-item table__body-item-number">
                1311100
              </li>
              <li className="table__body-item table__body-item-date">
                07.11.2020, 18:52
              </li>
              <li className="table__body-item table__body-item-status">
                <div className="table__body-status-wrapper">
                  <svg className="table__body-status-icon-canceled" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 12.5L3.5 3.5"/>
                  <circle cx="8" cy="8" r="6.5"/>
                  </svg>
                </div>
                <span className="table__body-title table__body-title-canceled">Отменен</span>
              </li>
              <li className="table__body-item table__body-item-items">
                -
              </li>
              <li className="table__body-item table__body-item-sum">
                -
              </li>
              <li className="table__body-item">
                София
              </li>
            </ul>
          </div>
        </div>

        <div className="table__footer">
          <div className="table__footer-actions">
            <div className="table__footer-actions-text">
              Выбрано записей: 5
            </div>
            <button className="button button_change">
              <svg className="table__footer-actions-icon-change" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 14.5H15"/>
              <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4"/>
              </svg>
              <span className="table__footer-actions-button-text">Изменить статус</span>
            </button>
            <button className="button button_delete">
              <svg className="table__footer-actions-icon-delete" viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" stroke-linecap="round"/>
              <path d="M6.5 6V12M9.5 6V12" stroke-linecap="round"/>
              </svg>
              <span className="table__footer-actions-button-text">Удалить</span>
            </button>
            <div className="dropdown dropdown_delete-group">
              <form className="dropdown__form">
                <div className="dropdown__delete">
                  <div className="dropdown__delete-title">
                    Удалить n записей?
                  </div>
                  <button className="button button_dropdown button_transparent">
                    <span className="dropdown__button-text">Удалить</span>
                  </button>
                  <button className="button button_dropdown">
                    <span className="dropdown__button-text">
                        Отмена
                    </span>
                  </button>
                </div>       
              </form>
            </div>
          </div>
          <div className="table__footer-pagination">
            <div className="table__footer-pagination-pages">
              <button className="button button_page">1</button>
              <button className="button button_page button_transparent">2</button>
              <button className="button button_page button_transparent">3</button>
              <span className="table__footer-pagination-text">...</span>
              <button className="button button_page button_transparent">18</button>
            </div>
            <div className="table__footer-pagination-choose">
              <button className="button button_page button_transparent">#</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    </body>
  );
}

export default App;
