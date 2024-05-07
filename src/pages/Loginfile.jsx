import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
function Loginfile(props)
{
    const Navigate = useNavigate()
    const[eusername,setEusername] = useState()
    const[epassword,setEpassword]=useState()
    const[ruser,setRuser]=useState(true)
  
    const users = props.users
    

    function handleUInput(event)
    {
      setEusername(event.target.value)
    }
     
    function handlePInput(event)
    {
      setEpassword(event.target.value)
    }

    function checkUser()
    {
      var userfound = false

       users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("Login Successfull")
            userfound=true
            Navigate("/Landing" , {state:{user:eusername}})

        }
        
    })
     
     if(userfound===false)
     {
         console.log("Login failed")
         setRuser(false)
     }

    }

   

    return(
        <div className="bg-black p-10 my-3">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hii!!</h1>
                {ruser?<p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up before you login</p>}
                

                <div className="flex flex-col gap-2 my-2">
                    <input 
                    type="text"
                    className="w-52 border border-black rounded-md bg-transparent p-1" 
                    placeholder="Username" onChange={handleUInput}/>
                     
                     <input 
                     type="text"
                     className="w-52 border border-black rounded-md bg-transparent p-1"
                     placeholder="Password" onChange={handlePInput} />

                     <button className="w-24 bg-[#8272DA]  rounded-md p-1" onClick={checkUser}>
                      Login
                     </button>

                     <p>Don't Have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>

                </div>

            </div>

        </div>
    )
}
export default Loginfile