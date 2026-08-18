export default function MenuItem({name, price}) {
    return (
        <div className="text-2xl text-center flex justify-between mx-3 my-2">
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}