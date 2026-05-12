import style from "./Form.module.css"
import form1 from "../../../img/form1.svg"
import form2 from "../../../img/form2.svg"
import form3 from "../../../img/form3.svg"

export const Form = () => {
    return (
        <form className={style.form}>
            <h1 className={style.formName}>Свяжитесь со мной</h1>

           <div className={style.section}>
               <img src={form1} alt="" className={style.sectionImg}/>
               <label htmlFor="" className={style.label}>E-mail*</label>
               <input type="email" placeholder="123@gmail.com" className={style.input}/>
           </div>

           <div className={style.section}>
               <img src={form2} alt="" className={style.sectionImg}/>
               <label htmlFor="" className={style.label}>Telegtam</label>
               <input type="text" placeholder="123@gmail.com" className={style.input}/>
           </div>

           <div className={style.section}>
               <img src={form3} alt="" className={style.sectionImg}/>
               <label htmlFor="" className={style.label}>Тема*</label>
               <input type="text" placeholder="Приобретение курсов" className={style.input}/>
           </div>

           <div className={style.sectionTextarea}>
               <label htmlFor="" className={style.labelTextarea}>Комментарий</label>
               <textarea name="" id="" className={style.textarea} defaultValue="Хочу купить ваши курсы для своих сотрудников и они станут очень умными. Направьте, пожалуйста, свои реквизиты для выставления счета. Хочу купить ваши курсы для своих сотрудников и они станут очень умными. Направьте, пожалуйста, свои реквизиты для выставления счета.">

                </textarea>
           </div>

           <button className={style.button}>Отправить</button>

        </form>
    );
};

