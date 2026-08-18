// assets
import MustardsLogo from './assets/img/MLS_Web_Logo.png'

// components
import Button from './components/SectionButton'
import Home from './components/Home'
import Boulder from './components/Boulder'
import Denver from './components/Denver'
import Menu from './components/Menu'
import Catering from './components/Catering'
import About from './components/About'

import { useState } from 'react'

function App() {
  const [locationSelect, setLocationSelect] = useState("None")
  const [sectionSelect, setSectionSelect] = useState("Order")

  
  function locationClick(location) {
    setLocationSelect(location)
  }


  function sectionClick(section) {
    setSectionSelect(section)
  }
  console.log(sectionSelect)

  return (
    <div className="h-dvh">
      <div className='bg-red-600 h-full flex-col'>
        <div className='bg-red-600 h-1/10 p-3' onClick={() => {
          locationClick("None")
          sectionClick("Order")
          }}>
            <img className='mx-auto' src={MustardsLogo} alt="MustardsLogo"/>
        </div>
        <div className='bg-red-600 h-[86dvh] p-2 mt-2'>
        {/* <div> */}
          {locationSelect == "None" && <Home locationClick={locationClick} />}
          {locationSelect == "Boulder" && sectionSelect == "Order" &&
            <Boulder 
              locationClick={locationClick} 
              sectionClick={sectionClick}
            />
          }
          {locationSelect == "Denver" && sectionSelect == "Order" &&
            <Denver 
              locationClick={locationClick} 
              sectionClick={sectionClick}
            />
          }
          {sectionSelect == "Menu" && 
            <Menu />
          }
          {sectionSelect == "Catering" && 
            <Catering />
          }
          {sectionSelect == "About" && 
            <About />
          }
        </div>
      </div>
    </div>
  )
}

export default App
