import React, { useState } from 'react'
const Button = () => {
    // buat latihan cek diconsole dan alert
    // const tracebutton = () => {
    //     alert("Button Clicked")
    //     console.log("Button Clicked")
    // }

    const [getvalue, setvalue] = useState("")

    const changebutton = () => {
        setvalue("asu bajingan")
    }
    return (
        <div>
            {/* <p className="test">{getvalue}</p> */}
            {/* {getvalue && <img src={getvalue} alt="Clicked" className="App-logo" />} */}
            <p className="test">{getvalue}</p>
            <button onClick={() => changebutton()}>Click Me Bro</button>
        </div>
    )
}

export default Button