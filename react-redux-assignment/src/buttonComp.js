export function ButtonComp(props) {
    const { buttonType, onClick } = props
    return (
        <>
            <button onClick={onClick}>{buttonType}</button>
        </>
    )
}