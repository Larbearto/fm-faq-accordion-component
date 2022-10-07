import DownArrow from '../public/images/icon-arrow-down.svg'
import { useState } from 'react'

const Accordion = ({ heading, content }) => {
  const [active, setActive] = useState(false)

  return (
    <li className=''>
      <div
        className='flex justify-between items-center border-b-[1px] pb-4 border-opacity-10 border-Darkgrayishblue cursor-pointer '
        onClick={() => setActive(!active)}
      >
        {active ? (
          <div className=''>
            <h3 className='text-Verydarkdesaturatedblue font-bold text-sm'>{heading}</h3>
            <p className='pt-2 text-xs text-Darkgrayishblue leading-5 '>{content}</p>
          </div>
        ) : (
          <div>
            <h3 className=' hover:text-Softred text-sm'>{heading}</h3>
          </div>
        )}
        {active ? (
          <div>
            <DownArrow className='rotate-180 transition-all ease-in-out duration-300 ml-1' />
          </div>
        ) : (
          <div>
            <DownArrow />
          </div>
        )}
      </div>
    </li>
  )
}

export default Accordion
