import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
function Signup(props)
{
    const Navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const[eusername,setEusername] = useState()
    const[epassword,setEpassword]=useState()

    function handleUInput(event)
    {
      setEusername(event.target.value)
    }
     
    function handlePInput(event)
    {
      setEpassword(event.target.value)
    }

    function addUser()
    {
      setusers([...users,{username:eusername,password:epassword}])
      Navigate("/")
    }



    return(
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
           <h1 className="text-3xl font-medium">Hey Hi!!</h1>
           <p>I help you manage your activities after you login :)</p>
           <div className="flex flex-col gap-2 my-2">
            <input
             type="text"
              className="w-52 border border-black rounded-md bg-transparent p-1"
              placeholder="Username"
              onChange={handleUInput} />
              
              <input 
              type="text"
              className="w-52 border border-black rounded-md bg-transparent p-1"
              placeholder="Password"
              onChange={handlePInput} />
              
              <input 
              type="text"
              className="w-52 border border-black rounded-md bg-transparent p-1"
              placeholder="Confirm Password" />
             
             <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
                Sign Up 
             </button>
            
            <p>Already have an account?<Link to={"/"} className="underline">Login</Link> </p>

           </div>
        </div>

    </div>)
}
export default Signup