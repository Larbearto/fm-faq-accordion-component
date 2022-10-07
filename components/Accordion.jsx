import DownArrow from '../public/images/icon-arrow-down.svg'
import { useState } from 'react'

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <li className='accordion-item list-none flex flex-col justify-center item-center'>
      <div className='accordion-toggle cursor-pointer' onClick={() => setIsActive(!isActive)}>
        <div className='flex justify-between pr-10 items-center  space-y-7 space-x-12'>
          <div className='hover:text-Softred'>
            {isActive ? (
              <h3 className='text-Verydarkdesaturatedblue font-bold text-[14px]'>{heading}</h3>
            ) : (
              <h3 className='border-opacity-10 hover:text-Softred pb-4 border-Darkgrayishblue border-b-[1px]'>
                {heading}
              </h3>
            )}
          </div>
          <div className='pb-6'>
            {isActive ? <DownArrow className='rotate-180' /> : <DownArrow className='' />}
          </div>
        </div>
        <div className='w-full h-full flex flex-col'>
          {isActive && (
            <div className='accordion-content text-Darkgrayishblue font-KumbhSans text-xs items-center justify-center border-b-[1px] border-opacity-10 pb-2 border-Darkgrayishblue '>
              {content}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default Accordion
