import MenuItem from "./MenuItem"

const menuSections = [
    "Hot Dogs", 
    "Burgers", 
    "Sandwiches", 
    "Italian", 
    "Vegetarian", 
    "Kids/Lite Meals", 
    "Drinks", 
    "Fries",
    "Sides & Extras", 
    "Cookies",
    "Take Us Home"
]

export default function Menu(props) {
    return (
        <>
            <div className="bg-white border-2 rounded-md my-5">
                <div className="text-3xl font-bold mx-3 my-2 font-hiphop">Hot Dogs</div>
                <MenuItem name="Chicago Dog" price="6.99"/>
                <MenuItem name="Double Dog" price="6.99"/>
                <MenuItem name="Polish Sausage" price="6.99"/>
                <MenuItem name="Teeny Weenie" price="6.99"/>
            </div>
        </>
    )
}