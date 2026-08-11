import Squiggle from '../assets/img/squiggle.png'
import Button from "./SectionButton"
import LinkButton from './LinkButton'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Denver({locationClick, sectionClick}) {
    const pickup = 'https://order.spoton.com/so-mustards-last-stand-18568/denver-co/6605b94f5abce32f88e9a6a9'

    function handleRedirect(url) {
        window.open = url
    }

    return (
        <div className='bg-red-600 flex flex-col justify-between h-full'>
            {/* middle upper */}
            <div>
                <p className="text-xl m-6 font-semibold text-center text-red-50 font-hiphop">Order Online in Denver</p>
                <LinkButton href={pickup} text="Pickup" />
                <img className="mx-auto m-6 scale-70" src={Squiggle} alt="Line"/>
                <LinkButton href={pickup} text="Delivery" />
            </div>
            {/* middle lower */}
            <div className=''>
                <p className="text-md font-semibold text-center text-red-50 font-hiphop">Hours</p>
                <p className="text-md font-Normal text-center text-red-50 ">OPEN DAILY at 11:00 a.m.</p>
                <p className="text-lg font-normal text-center text-red-50 ">Sunday-Thurs open until 8 p.m</p>
                <p className="text-lg font-normal text-center text-red-50 ">Friday & Saturday OPEN LATE until 10 p.m</p>
                <p className="text-sm m-3 font-thin text-center text-red-50 ">**Hours may be subject to change.**</p>
                <p className="text-md font-normal text-center text-red-50 ">Address: 2081 S. University Blvd.</p>
                <p className="text-md font-normal text-center text-red-50 ">Phone: 303-722-7936</p>
            </div>
            {/* bottom bar */}
            <div className='flex justify-center'>
                <div className='scale-85'>
                    <Button text="Menu" handleClick={locationClick} />
                </div>
                <div className='scale-85'>
                    <Button text="Catering" handleClick={locationClick} />
                </div>
                <div className='scale-85'>
                    <Button text="About" handleClick={locationClick} />
                </div>
            </div>
        </div>
    )
}