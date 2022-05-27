import { useEffect, useState } from "react"
import FormView from "../../../../components/forms/FormView";




const ExpertView = () => {
    const [toggleStatus, setToggleStatus] = useState(false)

    useEffect(()=>{
        window.document.title = 'WorkAt - Expert';
    },[])
  return (
    <div>
        <FormView toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}/>
    </div>
  )
}

export default ExpertView