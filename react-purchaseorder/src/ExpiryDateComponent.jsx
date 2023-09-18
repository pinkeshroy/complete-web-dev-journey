import { useState } from "react";

export function ExpiryDateComponent() {
    const [data, setData] = useState([])

    return (
        <>
            <FormComponent setData={setData} />
            <CreateTable data={data} />
        </>   
    )
}

function FormComponent({ setData }) {
    const [isDuplicate, setDuplicate] = useState(false);
    function validateDuplicate(e) {
        const newDate = e.target.value;
        setData((data) => {
            data.forEach(elem => {
                if (elem.date == newDate) {
                    setDuplicate(true)
                }
                else if (elem.date !== newDate) setDuplicate(false)
            });
            return data;
        })
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (e.target.children[0].value && e.target.children[1].value) {
                setData((data) => {
                    const newData = [...data, {
                        date: e.target.children[0].value,
                        quantity: e.target.children[1].value
                    }]
                    return newData
                }); 
            }
            e.target.children[0].value = ''
            e.target.children[1].value=''
        }}>
            <input type="date" required onKeyUp={validateDuplicate} onSelect={validateDuplicate} />
            <input type="number" required placeholder="quantity" disabled={ isDuplicate } />
            <button>+</button>
        </form>
    )
}
function CreateTable({ data }) {

    return (
        <>
            <table>
                <thead>
                    <th key={"qate"}>Date</th>
                    <th key={"quantity"}>Quantity</th>
                </thead>
                <tbody>
                    {
                        data.map(elem => {
                            return(<tr key={elem.date+elem.quantity}>
                                <td key={elem.date}>{elem.date}</td>
                                <td key={elem.quantity}>{elem.quantity}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
    
}