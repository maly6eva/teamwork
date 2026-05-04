import miro from "../../../img/miro.svg"
import frame from "../../../img/frime.svg"

export const Header = () => {
    return (
    <header>
     <ul>
         <li>
             <img src={miro} alt="img"/>
         </li>
         <li>Продукт</li>
         <li>Решения</li>
         <li>Решения</li>
         <li>Предприятия</li>
         <li>Тарифы</li>
     </ul>
        <ul>
            <li>
                <img src={frame} alt="frame"/>
            </li>
        </ul>
    </header>
    );
};

