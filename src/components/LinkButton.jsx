export default function LinkButton(props) {
    return (
        <div className="text-center">
            <a href={props.href}><button className='text-3xl font-semibold text-red-50 font-hiphop cursor-pointer'>{props.text}</button></a>
        </div>
    )
}