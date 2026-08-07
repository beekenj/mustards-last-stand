import Squiggle from '../assets/img/squiggle.png'
import Button from './SectionButton'

export default function Home({locationClick}) {
    return (
        <div className='bg-red-600 flex-col h-full'>
            <div>
                <p className="text-xl m-6 font-semibold text-center text-red-50 font-hiphop">Select Location</p>
                <Button text="Boulder" handleClick={locationClick} />
                <img className="mx-auto m-6 scale-70" src={Squiggle} alt="Line"/>
                <Button text="Denver" handleClick={locationClick} />
            </div>
            <div className='h-[30dvh]'></div>
            <div></div>
        </div>
    )
}