export const DataList = (props) => {
    const {order,a,b}=props
    return (
        <div>
            <div>{order }</div>
            <div>A:{ a}</div>
            <div>B:{ b}</div>
        </div>

    )
}
export const dataArray = [
    { a: Math.round(Math.random() * 10), b: Math.round(Math.random() * 100) },
    { a: Math.round(Math.random() * 10), b: Math.round(Math.random() * 100) },
    { a: Math.round(Math.random() * 10), b: Math.round(Math.random() * 100) },
    { a: Math.round(Math.random() * 10), b: Math.round(Math.random() * 100) }
]