import MustardsLogo from './assets/img/MLS_Web_Logo.png'

function App() {

  return (
    <div className="">
      <div className="bg-red-600 p-5 m-5">
        <img className="mx-auto m-10" src={MustardsLogo} alt="MustardsLogo"/>
        <p className="text-3xl font-semibold text-center text-red-50 font-hiphop">Boulder</p>
        <hr className="w-48 h-1 mx-auto bg-neutral-quaternary border-red-50 border-4 rounded-sm md:my-0"></hr>
        <p className="text-3xl font-semibold text-center text-red-50 font-hiphop">Denver</p>
      </div>
    </div>
  )
}

export default App
