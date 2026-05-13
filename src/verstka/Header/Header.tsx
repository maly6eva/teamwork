//import miro from "../../../img/miro.svg"
//import frame from "../../../img/frame.svg"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            {/*<div className={`${style.container} ${style.header__inner}`}>*/}
            {/*    <div className={style.header__left}>*/}
            {/*        <img src={miro} alt="img"/>*/}

                    <nav className={style.headerNav}>
                        <ul  className={style.headerUl}>
                            <li className={style.li} style={{color: "blue"}}>Продукт</li>
                            <li className={style.li}>Решения</li>
                            <li className={style.li}>Решения</li>
                            <li className={style.li}>Предприятия</li>
                            <li className={style.li}>Тарифы</li>
                        </ul>
                    </nav>

                    {/*<div className={style.header__right}>*/}
                    {/*    <img src={frame} alt="frame"/>*/}
                    {/*    <button>Регистрация</button>*/}
                    {/*</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </header>
    );
};

