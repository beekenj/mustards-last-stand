
export default function Button(props) {
    return (
        <div className="text-center">
            <button className="text-3xl font-semibold text-red-50 font-hiphop cursor-pointer" onClick={() => props.handleClick(props.text)}>{props.text}</button>
        </div>
    )
}