import style from "./Footer.module.css"


export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div  className={style.footer1}>
                &#169; 2023 Miro
            </div>
            <div  className={style.footer2}>
                <a href="#" className={style.footerA}>Условия пользования</a>
                <a href="#" className={style.footerA}>Политика конфиденциальности</a>
                <a href="#" className={style.footerA} >Управление файлами cookies</a>
            </div>
        </footer>
    );
};

