import miro from "../../../img/miro.svg"
import frame from "../../../img/frame.svg"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.container} ${style.header__inner}`}>
                <div className={style.header__left}>
                    <img src={miro} alt="img"/>

                    <nav>
                        <ul>
                            <li className={style.li}>Продукт</li>
                            <li>Решения</li>
                            <li>Решения</li>
                            <li>Предприятия</li>
                            <li>Тарифы</li>
                        </ul>
                    </nav>

                    <div className={style.header__right}>
                        <img src={frame} alt="frame"/>
                        <button>Регистрация</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

