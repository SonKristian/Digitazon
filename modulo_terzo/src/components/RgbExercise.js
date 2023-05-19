import React from 'react'
import { useState } from "react"

const RgbExercise = () => {
const [valueR, setValueR] = useState(0)
const [valueG, setValueG] = useState(0)
const [valueB, setValueB] = useState(0)

        return (
            <>
                <div className="container">
                    <span>numero da 0-255</span>
                    <input value={valueR} onChange={(e) => setValueR(e.target.value)}></input>
                    <span>numero da 0-255</span>
                    <input value={valueG } onChange={(e) => setValueG(e.target.value)}></input>
                    <span>numero da 0-255</span>
                    <input value={valueB } onChange={(e) => setValueB(e.target.value)}></input>
    
                    <div style={{ backgroundColor: `rgb(${valueR === "" ? 0 : valueR}, ${valueG === "" ?0 : valueG}, ${valueB === "" ? 0 : valueB})`, width: "250px", height:"250px"}}>Colore</div>
                </div>
    
            </>
    
        );
    }

export default RgbExercise;