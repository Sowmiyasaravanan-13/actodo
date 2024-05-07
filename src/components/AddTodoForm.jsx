import { useState } from "react"
import { act } from "react-dom/test-utils"

function AddTodoForm(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setNewactivity]=useState("")

    function handleChange(event)
    {
       setNewactivity(event.target.value)
    }
    function addActivity()
    {
      setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
      setNewactivity("")
    }
 return(
    <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input type="text" value={newActivity} onChange={handleChange} className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                    <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
                </div>
            </div>
 )
}
export default AddTodoForm