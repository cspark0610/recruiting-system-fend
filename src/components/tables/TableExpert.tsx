import {AiOutlineUp as ArrowUp, AiOutlineDown as ArrowDown} from 'react-icons/ai'
import {AiOutlineFilePdf as CVIcon} from 'react-icons/ai'
import {BsPlay as PlayIcon} from 'react-icons/bs'
import { IoMicCircleOutline as AudioIcon} from 'react-icons/io5';
import {IoMail as EmailIcon} from 'react-icons/io5'
import {BsFillTelephoneFill as PhoneIcon} from 'react-icons/bs'
import {GiSoundWaves as RecordIcon} from 'react-icons/gi'
import { useState } from 'react';

// interface Props {
//     toggleStatus: boolean,
//     setToggleStatus: any
// }

const TableExpert = () => {
    const [togglePosition, setTogglePosition] = useState(false)

    return(
        <div className="h-[50vh] w-screen text-[#313A4E] absolute left-0">
        {/*Table Head*/}
        <div className=" flex items-center h-1/5 border-b-2 border-[#DEE1E6] text-[#00ADEF] text-xl font-semibold py-8 select-none">
            <input type="checkbox" className="w-2/12 cursor-pointer" />
            <div className="w-2/3 flex ">Candidate</div>
            <div className="w-1/3 flex ">Salary</div>
            <div className="w-1/3 flex ">Availability</div>
            <div className="w-1/3 flex justify-center">Media</div>
            <div className="w-1/3 flex " >English</div>
            <div className="w-1/3 flex ">Int. Skills</div>
            <div className="w-1/3 flex ">Skills</div>
            <div className="w-1/3 flex flex items-center cursor-pointer" onClick={()=>setTogglePosition(!togglePosition)}>
                <span>Position</span>
                {togglePosition ? <ArrowUp className='ml-[0.5em]'/>: <ArrowDown className='ml-[0.5em]'/>}
            </div>

            {togglePosition 
                &&
                <ul className="absolute right-[0.9em] top-[3.5em] z-10  bg-[#FFFFFF] drop-shadow-xl  w-60 h-15 pt-2 pl-4 pb-2 rounded">
                    <li className=" flex flex-end items-center justify-center text-xs right-0 text-[#00ADEF]">
                        <span className="w-4/6 text-[#475564] font-semibold"></span>
                        <span className=" w2/6 cursor-pointer">Select all</span>
                        
                    </li>
        
                    <li className="flex flex-end items-center border-b-2 pb-2 pt-2">
                        <span className="w-5/6 text-[#475564] text-base font-normal">
                            Full Stack Sr
                        </span>
                        <input className="cursor-pointer" type="checkbox"/>
                    </li>
                    
                    <li className="flex flex-end items-center border-b-2 pb-2 pt-2">
                        <span className="w-5/6 text-[#475564] text-base font-normal">
                            Diseño UX/UI
                        </span>
                        <input className="cursor-pointer" type="checkbox"/>
                    </li>
                    <li className="flex flex-end items-center border-b-2 pb-2 pt-2">
                        <span className="w-5/6 text-[#475564] text-base font-normal">
                            SalesForce Dev Jr
                        </span>
                        <input className="cursor-pointer" type="checkbox"/>
                    </li>
                    <li className="flex flex-end items-center border-b-2 pb-2 pt-2">
                        <span className="w-5/6 text-[#475564] text-base font-normal">
                            Mobile Developer
                        </span>
                        <input className="cursor-pointer" type="checkbox"/>
                    </li>
                    <li onClick={()=> setTogglePosition(!togglePosition)} className="font-semibold text-[#475564] text-base pt-4 pb-2 cursor-pointer hover:text-[#00ADEF]">
                        Apply
                    </li>
                </ul>
                
            }
            
            
        </div>

        {/*TableBody*/}
        <div className="h-4/5 overflow-y-auto scrollbar-hide">

            {/* Table Row */}
            <div className=" flex items-center border-b-2 border-[#DEE1E6]  py-5 select-none">
                <input type="checkbox" className="w-2/12 cursor-pointer"/>
                {/* Candidate INFO */}
                <div className="w-2/3 flex flex-col">
                    <span>John Doe, <span className="font-semibold">31 years</span></span>
                    <div className="flex items-center">
                        <EmailIcon className="text-[1.1em] text-[#00ADEF] mr-[0.5em] "/>
                        <span className="text-[.8em] ">candidateemail.com</span>
                    </div>
                    <div className="flex items-center">
                        <PhoneIcon className="text-[0.8em] text-[#00ADEF] mr-[0.5em]"/>
                        <span className="text-[.8em]">+593 000 000 000</span>
                    </div>
                </div>

                {/* Candidate Salary */}
                <div className="w-1/3">1000 - 2000 usd</div>

                {/* Candidate Availability */}
                <div className="w-1/3">2 weeks</div>

                {/* Candidate Media */}
                <div className="w-1/3 flex flex-wrap h-full items-center justify-center">
                   <CVIcon className="cursor-pointer text-green text-[2em] text-[#00ADEF] hover:opacity-25"/>
                   <PlayIcon className="cursor-pointer text-[2.5em] text-[#00ADEF] hover:opacity-25"/>
                   <AudioIcon className="cursor-pointer text-[2.5em] text-[#475564] hover:opacity-25"/>
                </div>

                {/* Candidate English lvl */}
                <div className="w-1/3 flex items-center">
                    <div className="w-4 h-4 border-[#17E383] border-4 rounded-full cursor-pointer"></div>
                    <span className="font-semibold text-[#17E383] text-[1.2em] ml-[0.5em]">B2</span>
                </div>

                {/* Candidate Int Skills */}
                <div className="w-1/3 flex flex-wrap">
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        clean
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        charisma
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        price/quality
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        equity
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        equity
                    </span>                    
                </div>

                {/* Candidate Skills */}
                <div className="w-1/3 flex flex-wrap ">
                    <span className="border-[#00ADEF] bg-[#00ADEF] rounded-full px-1 mr-1 mb-1 text-xs text-[#fff] border-2 cursor-pointer">
                        CSS
                    </span>
                    <span className="border-[#00ADEF] bg-[#00ADEF] rounded-full px-1 mr-1 mb-1 text-xs text-[#fff] border-2 cursor-pointer">
                        React
                    </span>
                    <span className="border-[#E9E9E9] bg-[#E9E9E9] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        MySQL
                    </span>
                    <span className="border-[#E9E9E9] bg-[#E9E9E9] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        MongoDB
                    </span>
                    <span className="border-[#E9E9E9] bg-[#fff] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        PHP
                    </span>
                    <span className="border-[#E9E9E9] bg-[#fff] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        Django
                    </span>
                </div>

                {/* Candidate Position */}
                <div className="w-1/3 text-[#00ADEF] font-semibold ">Sr. Fullstack</div>
            </div>
            
            <div className=" flex items-center border-b-2 border-[#DEE1E6]  py-5 select-none">
                
                <input type="checkbox" className="w-2/12 cursor-pointer"/>
                {/* Candidate INFO */}
                <div className="w-2/3 flex flex-col">
                    <span>Erik Stanislavsky, <span className="font-semibold">31 years</span></span>
                    <div className="flex items-center">
                        <EmailIcon className="text-[1.1em] text-[#00ADEF] mr-[0.5em] "/>
                        <span className="text-[.8em] ">candidateemail.com</span>
                    </div>
                    <div className="flex items-center">
                        <PhoneIcon className="text-[0.8em] text-[#00ADEF] mr-[0.5em]"/>
                        <span className="text-[.8em]">+593 000 000 000</span>
                    </div>
                </div>
                <div className="w-1/3">1000 - 2000 usd</div>
                <div className="w-1/3">2 weeks</div>
                <div className="w-1/3 flex flex-wrap h-full items-center justify-center">
                   <CVIcon className="cursor-pointer text-green text-[2em] text-[#00ADEF] hover:opacity-25"/>
                   <PlayIcon className="cursor-pointer text-[2.5em] text-[#00ADEF] hover:opacity-25"/>
                   {/* <AudioIcon className="cursor-pointer text-[2.5em] text-[#475564] hover:opacity-25"/> */}
                   <RecordIcon className="cursor-pointer text-[2.5em] text-[#00ADEF] hover:opacity-25"/>
                </div>
                <div className="w-1/3 flex items-center">
                    <div className="w-4 h-4 border-[#FBBC41] border-4 rounded-full cursor-pointer"></div>
                    <span className="font-semibold text-[#FBBC41] text-[1.2em] ml-[0.5em]">C1</span>
                </div>
                <div className="w-1/3 flex flex-wrap">
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        clean
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        charisma
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        price/quality
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        equity
                    </span>
                    <span className="border-[#00ADEF] rounded-md px-1 mr-1 mb-1 text-xs text-[#00ADEF] border-2 cursor-pointer">
                        equity
                    </span>
                    
                </div>
                <div className="w-1/3 flex flex-wrap ">
                    <span className="border-[#00ADEF] bg-[#00ADEF] rounded-full px-1 mr-1 mb-1 text-xs text-[#fff] border-2 cursor-pointer">
                        CSS
                    </span>
                    <span className="border-[#00ADEF] bg-[#00ADEF] rounded-full px-1 mr-1 mb-1 text-xs text-[#fff] border-2 cursor-pointer">
                        React
                    </span>
                    <span className="border-[#E9E9E9] bg-[#E9E9E9] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        MySQL
                    </span>
                    <span className="border-[#E9E9E9] bg-[#E9E9E9] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        MongoDB
                    </span>
                    <span className="border-[#E9E9E9] bg-[#fff] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        PHP
                    </span>
                    <span className="border-[#E9E9E9] bg-[#fff] rounded-full px-1 mr-1 mb-1 text-xs text-[#475564] border-2 cursor-pointer">
                        Django
                    </span>
                   
                </div>
                <div className="w-1/3 text-[#00ADEF] font-semibold ">
                    <span className="text-[#475564]">In Process:</span> 
                    <span className="font-normal text-[#475564]"> UXUI Designer</span>
                </div>
            </div>
            

        </div>
       

    </div>
    )
}

export default TableExpert