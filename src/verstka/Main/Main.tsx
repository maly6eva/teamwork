import img1 from "../../../img/img1.jpg"
import img2 from "../../../img/img2.jpg"
import img3 from "../../../img/img3.jpg"
import img4 from "../../../img/img4.jpg"
import card1 from "../../../img/card1.svg"
import card2 from "../../../img/card2.svg"
import card3 from "../../../img/card3.svg"
import card4 from "../../../img/card4.svg"
import vec1 from "../../../img/vec1.svg"
import vec2_1 from "../../../img/vec2_1.svg"
import vec2_2 from "../../../img/vec2_2.svg"
import vec2_3 from "../../../img/vec2_3.svg"
import vec3 from "../../../img/vec3.svg"
import vec4 from "../../../img/vec4.svg"
import fram from "../../../img/fram.svg"
import style from "./Main.module.css"

export const Main = () => {
    return (
        <main>
            <section className={style.section1}>
                <div className={style.section1div}>
                    <h1>Место для командной работы</h1>
                    <p className={style.herroText}>Интерактивная онлайн-доска для совместной работы команд — в любое
                        время, в любом месте.</p>
                    <div className={style.sectionForm}>
                        <form action="/register" method="get" className={style.heroForm}>
                            <input type="email" name="email" id="email"/>
                            <button id="heroButton" className="test test2">Начать бесплатно</button>
                            <button>ti</button>
                        </form>
                        <p className={style.sectionText}>Всегда бесплатно — кредитная карта не нужна</p>
                    </div>
                    <div className={style.section1card}>
                        <a href="#" className={style.sectionA}>
                            45M+ пользователей
                        </a>
                        <img src={card1} alt="" className={style.section1card1}/>
                        <img src={card2} alt="" className={style.section1card2}/>
                        <img src={card3} alt="" className={style.section1card3}/>
                        <img src={card4} alt="" className={style.section1card4}/>
                    </div>
                </div>
                <div className={style.section1div2}>
                    <img src={img1} alt="" className={style.heroCart}/>
                </div>
            </section>

            <section className={style.section2}>
                <div className={style.section2div}>
                    <h2 className={style.sectionP2}>
                        Работайте вместе, где бы вы ни находились
                    </h2>
                    <p className={style.sectionText2}>Работая в офисе, удалённо или в гибридном формате, с Miro ваша
                        команда
                        может общаться, сотрудничать и совместно заниматься творчеством в одном пространстве, из любой
                        точки
                        мира.</p>
                    <a href="#" className={style.sectionA3}>Узнать больше</a>
                </div>
                <img src={img2} alt="" className={style.section2img}/>
            </section>


            <section className={style.section3}>
                <img src={img3} alt="" className={style.section3img}/>
                <div className={style.section3div}>
                    <h2 className={style.sectionP3}>Закройте лишние вкладки — всё уже здесь</h2>
                    <p className={style.sectionText3}>Редактируете ли вы документы в Google Docs, работаете над задачами
                        в
                        Jira или созваниваетесь в Zoom, Miro предлагает более 100 интеграций с уже известными и
                        полюбившимися вам инструментами.</p>
                    <a href="#" className={style.sectionA3}>Узнать больше</a>
                </div>
            </section>

            <section className={style.section4}>
                <h2 className={style.sectionP4}>Создан для всех типов команд</h2>

                <nav className={style.navMain}>
                    <ul className={style.ulMain}>
                        <li className={style.liMain}>UX и дизайн</li>
                        <li className={style.liMain}>Маркетинг</li>
                        <li className={style.liMain}>Управление продуктом</li>
                        <li className={style.liMain}>Разработка</li>
                        <li className={style.liMain}>Консалтинг</li>
                        <li className={style.liMain}>Agile-коучинг</li>
                        <li className={style.liMain}>Продажи</li>
                    </ul>
                </nav>

                <article className={style.article}>
                    <div className={style.articleDiv}>
                        <ul className={style.articleUl}>
                            <li className={`${style.articleLi} ${style.one}`}>
                                <img src={fram} alt="" className={style.articleImg}/>
                                <p className={`${style.articlePar} ${style.one}`}>Создавайте вайрфреймы</p>
                            </li>
                            <li className={`${style.articleLi} ${style.two}`}>
                                <img src={fram} alt="" className={style.articleImg}/>
                                <p className={`${style.articlePar} ${style.two}`}> Подключайте заказчиков к процессу дизайна</p>
                            </li>
                            <li className={`${style.articleLi} ${style.three}`}>
                                <img src={fram} alt="" className={style.articleImg}/>
                                <p className={`${style.articlePar} ${style.three}`}> Проводите вовлекающие дизайн-воркшопы</p>
                            </li>
                        </ul>
                        <a href="#" className={style.sectionA4}>Узнать больше</a>
                        <p className={style.articleP}>Интегрируйте ваши любимые инструменты</p>

                        <div className={style.articleDiv2}>
                            <img src={vec1} alt="" className={style.articleVec}/>
                            <img src={vec2_1} alt="" className={style.articleVec}/>
                            <img src={vec2_2} alt="" className={`${style.articleVec} ${style.one}`}/>
                            <img src={vec2_3} alt="" className={`${style.articleVec} ${style.two}`}/>
                            <img src={vec3} alt="" className={style.articleVec}/>
                            <img src={vec4} alt="" className={style.articleVec}/>
                        </div>
                    </div>

                    <img src={img4} alt="" className={style.articleImges}/>
                </article>

            </section>
        </main>
    );
};
