import MustardsLogo from '../assets/img/MLS_Web_Logo.png'
import Squiggle from '../assets/img/squiggle.png'
import Squiggle2 from '../assets/img/squiggle2.png'
import Button from './Button'

export default function Home({locationClick}) {
    return (
        <div className="h-dvh bg-gray-200 p-5">
            <div className="bg-red-600 p-5 h-[93dvh]">
                <img className="mx-auto m-10" src={MustardsLogo} alt="MustardsLogo"/>
                <p className="text-xl m-6 font-semibold text-center text-red-50 font-hiphop">Select Location</p>
                <Button text="Boulder" handleClick={locationClick} />
                <img className="mx-auto m-6 scale-70" src={Squiggle} alt="Line"/>
                <img className="mx-auto m-6" src={Squiggle2} alt="Line"/>
                <Button text="Denver" handleClick={locationClick} />
            </div>
        </div>
    )
}