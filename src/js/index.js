//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
let counter1s = 0
let counter1m = 0
let counter10m = 0
let counter1h = 0
let counter10h = 0
let counter100h = 0
function SimpleCounter (props) {    
    return (

		<>
        <div className="mainFrame bg-dark text-light d-flex justify-content-center ts-3">
			<div className="clockIcon" >
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="digit6">{props.digit6}</div>
			<div className="digit5">{props.digit5}</div>
			<span>:</span>
			<div className="digit4">{props.digit4}</div>
			<div className="digit3">{props.digit3}</div>
			<span>:</span>
			<div className="digit2">{props.digit2}</div>
			<div className="digit1">{props.digit1}</div>
		</div>		
        <div>
            
        </div>
        </>
        
        
	);
}
setInterval(
    function () {     
        if (counter1s === 10) {
            counter1m++
            if (counter1m === 6) {
                counter10m++
                if (counter10m === 10) {
                    counter1h++
                    if (counter1h === 6) {
                        counter10h++
                        if (counter10h === 10) {
                            counter100h++
                            if (counter100h === 10) {
                                counter1s = 0
                                counter1m = 0
                                counter10m = 0
                                counter1h = 0
                                counter10h = 0
                                counter100h = 0
                                console.log('1 reset')
                            }
                            counter10h=0
                            
                        }
                        counter1h=0
                    }
                    counter10m = 0
                }
                counter1m = 0
            }
            counter1s = 0
        }
        
        
        ReactDOM.render(<SimpleCounter digit1={counter1s} digit2={counter1m} digit3={counter10m} digit4={counter1h} digit5={counter10h} digit6={counter100h}/>, document.querySelector("#app"));
        counter1s++
    }, 1000
)
//render your react application
// parseInt(props.intervalNumber)
// parseInt(props.maxNumber)