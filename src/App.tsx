 import {Header} from "./verstka/Header/Header";
import "./index.css"
 //import {Form} from "./verstka/Form/Form";
 import {Main} from "./verstka/Main/Main";
 import {Footer} from "./verstka/Footer/Footer";


function App() {

    return (
        <div className={"app"}>
            <Header/>
            <Main/>
            <Footer/>
            {/*<Form />*/}
        </div>
    )
}

export default App
