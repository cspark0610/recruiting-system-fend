import { useEffect, useState } from "react"
import FormView from "../../../../components/forms/FormView";
import {RiDownloadFill as DonwloadIcon, RiArrowLeftRightFill as SwitchIcon} from 'react-icons/ri'
import TableExpert from "../../../../components/tables/TableExpert";
import { CircularProgress as DownloadingProgressIcon } from "@material-ui/core";
// import {GrDocumentText as CVIcon, GrPlay as PlayIcon} from 'react-icons/gr'




const ExpertView = () => {
    const [toggleStatus, setToggleStatus] = useState(false)
    const [toggleComparingView, setToggleComparingView] = useState(true)

    useEffect(()=>{
        window.document.title = 'WorkAt - Expert';
    },[])
  return (
    <div className="flex flex-col items-center" >
        {toggleComparingView ? 
            <div className="w-full">
            <FormView toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}/>
            {/* Buttons Holder */}
            <div className="flex my-6">
                <div className=" flex items-center justify-center w-12 h-12 bg-[#475564] rounded-full cursor-pointer">
                    <DonwloadIcon className="text-3xl text-[#FFFFFF] "/>
                </div>
                <div onClick={()=>setToggleComparingView(!toggleComparingView)} className="ml-6 flex items-center justify-center w-12 h-12 bg-[#00ADEF] rounded-full cursor-pointer">
                <SwitchIcon className="text-3xl text-[#FFFFFF] "/>
                </div>
            </div>

           
            <TableExpert/>
            

            {/* Recandidate Holder */}
            {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[#D3D5D8] w-screen flex items-center justify-center h-28">
                <button className="bg-[#00ADEF] text-[#fff] font-bold px-12 py-4 rounded-md ">
                    RECANDIDATE
                </button>
            </div> */}

            <div className="absolute bottom-0 left-0 bg-[#F9F9F9] w-screen flex items-center justify-center h-28">
                <span className="text-[#00ADEF] font-bold mx-4">
                    DOWNLOADING
                </span>
                <DownloadingProgressIcon style={{color:"#00ADEF"}}/>

            </div>
        </div>

        :   
            // Comparing View
        <div className="mt-32 w-full bottom-0 absolute flex h-3/4">
            {/* <div className="flex flex-col w-1/5">
                <div className=" border-b-2 h-1/6 justify-center w-full">█
                </div>
                <div className="text-[#00ADEF] justify-center w-full text-xl font-medium border-b-2 h-1/6">
                    <p>sadasd</p>    
                </div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Salary</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Availability</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Media</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">English level</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Interview skills</div>
                <div className="text-[#00ADEF] text-xl font-medium h-1/6">Tech Skills</div> 
            </div>
            <div className="flex flex-col w-2/5  h-full">
                <div className="text-[#00ADEF] border-b-2 h-1/6">Candidate Info</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Position process</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Salary</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Availability</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Media</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">English level</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Interview skills</div>
                <div className="text-[#00ADEF] text-xl font-medium h-1/6">Tech Skills</div> 
            </div>

            <div className="flex flex-col w-2/5  h-full ">
                <div className="text-[#00ADEF] border-b-2 h-1/6">Canditate Info</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Position process</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Salary</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Availability</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Media</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">English level</div>
                <div className="text-[#00ADEF] text-xl font-medium border-b-2 h-1/6">Interview skills</div>
                <div className="text-[#00ADEF] text-xl font-medium h-1/6">Tech Skills</div> 
            </div> */}
            
        </div>
        }
        
    </div>
  )
}

export default ExpertView