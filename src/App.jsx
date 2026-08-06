import MustardsLogo from './assets/img/MLS_Web_Logo.png'
import Squiggle from './assets/img/squiggle.png'
import Squiggle2 from './assets/img/squiggle2.png'

// components
import Button from './components/Button'
import Home from './components/Home'
import Boulder from './components/Boulder'

import { useState } from 'react'

function App() {
  const [sectionSelect, setSectionSelect] = useState("Home")

  function locationClick(location) {
    setSectionSelect(location)
  }

  // console.log(sectionSelect)

  return (
    <>
      {sectionSelect == "Home" && <Home locationClick={locationClick} />}
      {sectionSelect == "Boulder" && <Boulder locationClick={locationClick} />}
    </>
  )
}

export default App
