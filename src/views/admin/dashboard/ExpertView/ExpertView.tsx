import { useEffect, useState } from "react"
import FormView from "../../../../components/forms/FormView";
import {RiDownloadFill as DonwloadIcon, RiArrowLeftRightFill as SwitchIcon} from 'react-icons/ri'




const ExpertView = () => {
    const [toggleStatus, setToggleStatus] = useState(false)

    useEffect(()=>{
        window.document.title = 'WorkAt - Expert';
    },[])
  return (
    <div className="flex flex-col">
        <FormView toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}/>

        {/* Buttons Holder */}
        <div className="flex my-6">
            <div className=" flex items-center justify-center w-12 h-12 bg-[#475564] rounded-full cursor-pointer">
                <DonwloadIcon className="text-3xl text-[#FFFFFF] "/>
            </div>
            <div className="ml-6 flex items-center justify-center w-12 h-12 bg-[#00ADEF] rounded-full cursor-pointer">
                <SwitchIcon className="text-3xl text-[#FFFFFF] "/>
            </div>
        </div>

        
    </div>
  )
}

export default ExpertView