import { BrowserRouter,Routes,Route } from "react-router-dom";
import Form from "./Component/Task/Form";
import Home from "./Component/Task/Home";
const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing