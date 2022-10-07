import BgDesktop from '../public/images/bg-pattern-desktop.js'
import WomanDesktop from '../public/images/illustration-woman-online-desktop.svg'
import Box from '../public/images/illustration-box-desktop.svg'
import Accordion from '../components/Accordion'
import { accordionData } from '../data/accordionData'

const App = () => {
  return (
    <div className='min-h-screen max-h-full max-w-screen justify-center items-center flex flex-col bg-gradient-to-t from-Softblue to-Softviolet overflow-hidden font-KumbhSans text-sm relative'>
      <BgDesktop className='absolute -left-56 -top-28 z-[999] scale-50 opacity-40' />
      <main className='m-24 flex flex-col w-[920px] h-[500px] rounded-3xl bg-Lightgrayishblue drop-shadow-2xl shadow-2xl relative'>
        <Box className='flex absolute top-44 -left-24 z-[999] overflow-visible' />
        <div className='flex min-h-full relative overflow-hidden '>
          <div className='w-1/2 relative '>
            <WomanDesktop className='-left-20 top-10 absolute ' />
          </div>

          <div className='w-1/2 flex flex-col justify-center items-center'>
            <div className='flex flex-col text-Darkgrayishblue text-xs mr-12 w-[350px]'>
              <h1 className=''>FAQ</h1>
              <ul className='accordion'>
                {accordionData.map(({ heading, content }) => (
                  <Accordion key={heading + content} heading={heading} content={content} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
