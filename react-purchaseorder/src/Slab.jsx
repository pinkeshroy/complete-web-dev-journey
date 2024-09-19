import { func } from "prop-types"
import { useState } from "react"


export function Slab() {
    const [lastQuality,setLastQuality]=useState(0)

    return (
        <>
            <form>
                <input value={1} placeholder="Starting Quantitiy" type="number" contentEditable={ true} />
                <input placeholder="Last Quantitiy" type="number" onBlur={(e) => {
                    setLastQuality(e.target.value)
                }} />
                <input placeholder="Price"  value={lastQuality*10}/>
            </form>
            {
                lastQuality > 1 && <SlabComponent startQ={lastQuality } />
            }
        </>
    )
}

function SlabComponent({ startQ }) {
    const [lastQ, setLastQ ]= useState(0)

    return (
        <>
            <form>
                <input value={startQ} placeholder="Starting Quantitiy" type="number" contentEditable={true} />
                <input placeholder="Last Quantitiy" type="number" onBlur={(e) => {
                    setLastQ(e.target.value)
                }} />
                <input placeholder="Price" value={lastQ * 10} />
            </form>
            {
                lastQ > setLastQ && <SlabComponent startQ={lastQ} />
            }
        </>
    )
}