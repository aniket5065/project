import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)

    const locations = [
        '24B, nears kappors cafe, shreyans coding school',
        '28B, nears Malhotras cafe, shreyans coding school',
        '22B, nears kappors cafe, shreyans coding school',
        "24B, nears kapporscafe, shreyans coding school"
    ]
  return (
    <div >
       {/* this is just sample data */}

       {
        locations.map(function(elem,idx){
            return  <div key={idx} onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} className='flex gap-4 border-2  p-3 border-gray-50 active:border-black rounded-xl items-center  my-2 justify-start '>
            <h2 className='bg-[#eee] h-5 w-2 rounded-full flex items-center justify-center'><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
        })
       }


        
        

    </div>
  )
}

export default LocationSearchPanel