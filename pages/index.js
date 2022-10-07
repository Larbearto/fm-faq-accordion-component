import BgDesktop from '../public/images/bg-pattern-desktop.js'
import BgMobile from '../public/images/bg-pattern-mobile.svg'
import WomanDesktop from '../public/images/illustration-woman-online-desktop.svg'
import Box from '../public/images/illustration-box-desktop.svg'
import Accordion from '../components/Accordion'
import { accordionData } from '../data/accordionData'

const App = () => {
  return (
    <div className='flex flex-col max-h-full min-h-screen max-w-full justify-center items-center bg-gradient-to-t from-Softblue to-Softviolet relative font-KumbhSans'>
      <main className='flex flex-col lg:flex lg:flex-row bg-Lightgrayishblue rounded-3xl justify-center items-center w-[330px] h-[620px] lg:h-[510px] lg:w-[920px] z-10 relative drop-shadow-3xl shadow-Verydarkdesaturatedblue shadow-xl '>
        <Box className='absolute scale-50 lg:scale-90 -top-24 -left-4 lg:top-[190px] lg:-left-24 z-50' />

        <BgMobile className='absolute top-2 left-[40px] lg:invisible visible' />
        <BgDesktop className='invisible  lg:visible lg:scale-50 lg:-top-56 lg:-left-80 absolute opacity-20' />

        <div className='leftside w-1/2 relative lg:overflow-hidden h-full'>
          <WomanDesktop className=' scale-50 absolute z-40 -left-40 -top-48 lg:scale-100 lg:top-16 lg:-left-20 ' />
        </div>
        <div className='accordion lg:w-1/2 lg:p-10 flex-col w-full flex lg:justify-center h-full lg:pl-12 lg:pr-16 px-6 pb-14'>
          <h1 className='pb-10 lg:text-left text-center'>FAQ</h1>
          <ul className='space-y-6'>
            {accordionData.map(({ heading, content }) => (
              <Accordion key={heading + content} heading={heading} content={content} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
