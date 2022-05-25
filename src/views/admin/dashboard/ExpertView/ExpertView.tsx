import { useEffect } from "react"


const ExpertView = () => {
    useEffect(()=>{
        window.document.title = 'WorkAt - Expert';
    },[])
  return (
    <div className="flex flex-col">
      <span className="flex justify-center text-[#475564] text-2xl font-semibold mt-32">
        Expert View
      </span>

      <div>
          <h2>Candidate Records</h2>
          <span>
              Search by Skills
          </span>
          <div>

          </div>
      </div>
    </div>
  )
}

export default ExpertView
