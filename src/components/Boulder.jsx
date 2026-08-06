import MustardsLogo from '../assets/img/MLS_Web_Logo.png'
import Squiggle from '../assets/img/squiggle.png'
import Button from "./Button"

export default function Boulder({locationClick}) {
    return (
        <div className="h-dvh bg-gray-200 p-5">
            <div className="bg-red-900 h-[5dvh] grid grid-cols-3 gap-3">
                {/* <p>menu</p> */}
                {/* <div>
                    <img className="m-1" src={MustardsLogo} alt="MustardsLogo"/>
                </div> */}
                <div className='p-2 scale-75'>
                    <Button text="Home" handleClick={locationClick} />
                </div>
                <div className='p-2 scale-75'>
                    <Button text="Boulder" handleClick={locationClick} />
                </div>
                <div className='p-2 scale-75'>
                    <Button text="Denver" handleClick={locationClick} />
                </div>
                {/* <div>hi</div> */}
                {/* <Button className="" text="Boulder" handleClick={locationClick} /> */}
            </div>
            <div className="bg-red-600 p-5 h-[88dvh]">
                <p className="text-xl m-6 font-semibold text-center text-red-50 font-hiphop">Select Location</p>
                <Button text="Boulder" handleClick={locationClick} />
                <img className="mx-auto m-6 scale-70" src={Squiggle} alt="Line"/>
                {/* <img className="mx-auto m-6" src={Squiggle2} alt="Line"/> */}
                <Button text="Denver" handleClick={locationClick} />
                <p>Boulder</p>
            </div>
        </div>
    )
}