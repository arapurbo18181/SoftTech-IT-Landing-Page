import React from 'react'
import { Link } from 'react-router-dom'

const WordpressOfflineGroups = ({wordpressOfflineGroups}) => {
  return (
    <div>
    {/* //! Title */}
      <div className="mt-10 mb-5">
        <h1 className="text-[1.5rem] text-center font-extrabold text-sky-500">
          Wordpress Offline{" "}
          <span className="underline underline-offset-[10px] text-[#f1971a]">
            Groups
          </span>
        </h1>
      </div>
      {/* //! Groups */}
      <div className="grid grid-cols-2 w-full gap-4">
        {
            wordpressOfflineGroups.map(item=>{
            return(
              <Link to={item.url} target="_blank" className="bg-gray-300 flex justify-between pl-4 pr-7 items-center w-full space-x-4 h-[70px] rounded-md overflow-hidden">
              {/* //! Group Thumbnail */}
                <div className="w-[15%]">
                  <img className='rounded-md ' src="softtechitinstitutegroup.png" />
                </div>
                {/* //! Group Title */}
                <div className='flex-1'>
                  <h2 className="text-xl font-semibold"> {item.title} </h2>
                </div>
                {/* //! View Button */}
                <button className='text-sky-600 font-bold underline underline-offset-2 text-xl'> View </button>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default WordpressOfflineGroups