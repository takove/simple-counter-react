import React from 'react'
import ReactDOM from "react-dom";
let counter = 0


export function CounterComponent (props) {
    setInterval(
        function () {
            console.log(counter)            
            if (counter === parseInt(props.maxNumber)) {
                counter = 0
            }
            counter++
            
        }, parseInt(props.intervalNumber)
    )
    ReactDOM.render(<CounterComponent className='digit1' maxNumber="9" intervalNumber="1000" />, document.querySelector("digit1"))
}