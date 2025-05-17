// import React from 'react'

// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if (activeField === 'pickup') {
//             setPickup(suggestion)
//         } else if (activeField === 'destination') {
//             setDestination(suggestion)
//         }
//         // setVehiclePanel(true)
//         // setPanelOpen(false)
//     }

//     return (
//         <div>
//             {/* Display fetched suggestions */}
//             {
//                 suggestions.map((elem, idx) => (
//                     <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                         <h4 className='font-medium'>{elem}</h4>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default LocationSearchPanel

import React from 'react'

const LocationSearchPanel = ({ suggestions = [], setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        // Extract a display string from suggestion if it's an object
        const value = typeof suggestion === 'object' && suggestion.description ? suggestion.description : suggestion;
        if (activeField === 'pickup') {
            setPickup(value)
        } else if (activeField === 'destination') {
            setDestination(value)
        }
        // Optionally, close the panel or open the next panel.
        setPanelOpen(true);
        
    }

    return (
        <div >
            {/* Display fetched suggestions */}
            { suggestions.map((elem, idx) => {
                const displayText = typeof elem === 'object' && elem.description ? elem.description : elem;
                return (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3  border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex  items-center justify-center w-12 rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{displayText}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default LocationSearchPanel