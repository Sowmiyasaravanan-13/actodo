import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Loginfile from "./pages/Loginfile";
import Signup from "./pages/Sign Up";
import Landing from "./pages/Landing";
import { useState } from "react";

function App()
{
 
    const[users, setUsers] = useState(
        [
            {
                username:"sowmiya",
                password:"123"
            },
            {
                username:"saravanan",
                password:"456"
            }
        ]
    )

    return(
    <div>
    <BrowserRouter>

    <Routes>
    <Route path='/' element={<Loginfile users={users} setusers={setUsers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setUsers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </div>
    

    )

}

export default App;
