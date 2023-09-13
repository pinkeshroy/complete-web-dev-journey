import { useEffect } from "react"

export function NodeApiCAll() {
    useEffect(() => {
        fetch('/get-route').then(x => x.json()).then(y => console.log({ y }))
    })
    useEffect(() => {
        fetch("/get-route", {
            method: "POST",
            body: JSON.stringify({
                checkPost: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(x => x.json()).then(x => console.log({ x }))
    })
}