import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import FormContainer from '../components/FormContainer'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const InjuryHelp = (props) => {
    const navigate = useNavigate

    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("")
    const [five, setFive] = useState("");

    const [six, setSix] = useState("");
    const [seven, setSeven] = useState("");
    const [eight, setEight] = useState("");
    const [nine, setNine] = useState("");
    const [ten, setTen] = useState("");


    const [errors, setErrors] = useState([]);
    const [dbErrors, setDBErrors] = useState([]);

    const createProspect = (e) => {
        e.preventDefault();
        console.log("Prospect Data Saved")
        navigate('/Evaluation')

        const newProspect = {
            one: one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        }

        axios.post("http://localhost:8000/api/prospects", newProspect)
            .then(res => {
                console.log(res.data);
                console.log("success adding a Prospect!!");
                navigate("/next")
            })
            .catch(err => {
                console.log("ERROR ❌ Couldn't Ad Prospect!");
                console.log("?????", err.response.data.error.errors);

                // handle Errors - another way
                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map( error => errors[error].message )
                console.log(messages);
                setDBErrors(messages);

            })
    }

    
    
    return (
    
    <div>
        
        <h1 className='gold'>
        Rana Law Office
        </h1>

        <h1 className='redWhite'>
            Auto Accident & Injury Help
        </h1>
        <h1 className='redWhite'>
            Get a Free Case Evaluation
        </h1>
        <h2>
            100's of people are injured in accidents every day and 
            MOST HAVE SERIOUS INJURIES THAT DESERVE COMPENSATION.
        </h2>
        <br />
        <h2>
            Insurance companies know this and try to settle a claim quickly for as little as possible by employing their own legal experts. This is why you need the best Injury Attorney on your side is essential for all accident cases today.
        </h2> <br />
        <h1 className='large'>
            You May be Entitled to Maximum Compensation. Take this 60 second qualification and find out:
        </h1>

        

            

            {/* {
                errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)
            } */}
            {
                dbErrors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)
            }

            <form onSubmit={createProspect} >
                <div style={{display: "flex", alignItems: "center", alignContent: "space-between",justifyContent: "space-between",  padding: "15px" , border: "2px solid black", height: "700px" }} >

                <div style={{  alignItems: "center", fontSize: "30px" }}>
                How were you hurt? *
                <input type="textarea" onChange={(e) => setOne(e.target.value)} value={one} /> <br />

                

                How long ago was your accident: *
                <input type="text" onChange={(e) => setTwo(e.target.value)} value={two} /><br />

                Was the accident your fault? *
                <input type="text" onChange={(e) => setThree(e.target.value)} value={three} /><br />
                <br />

                <button style={{backgroundColor: "black", color: "white", fontSize: "40px" }} >Submit Information</button>

                </div>

                <div style={{  alignItems: "center", fontSize: "30px" }}> 

                Did the police arrive? *  
                <input type="text" onChange={(e) => setFour(e.target.value)} value={four} /><br />

                How were you injured? *
                <input type="text" onChange={(e) => setFive(e.target.value)} value={five} /><br />

                Are you currently represented by an attorney in this accident? *
                <input type="text" onChange={(e) => setSix(e.target.value)} value={six} /><br />
                <br />

                Please describe your accidents and injuries? *
                <input type="text" onChange={(e) => setSeven(e.target.value)} value={seven} /><br />
                <br />

                What's your full name? *
                <input type="text" onChange={(e) => setEight(e.target.value)} value={eight} /><br />
                <br />

                What's your best email? *
                <input type="text" onChange={(e) => setNine(e.target.value)} value={nine} /><br />
                <br />

                Your cell phone number? *
                <input type="text" onChange={(e) => setTen(e.target.value)} value={ten} /><br />
                <br />

                </div>



                </div>
                
            </form>
        
    </div>

    )
}

export default InjuryHelp