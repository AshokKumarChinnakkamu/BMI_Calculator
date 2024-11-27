import { useState } from "react";
import "./App.css";
function App() {
const[height,SetHeight]=useState("");
const[weight,SetWeight]=useState("");
const[bmi,SetBmi]=useState(null);
const[bmiStatus,SetBmiStatus]=useState("");


const calculateBmi=()=>{
  if(height && weight){
    const heightInMeters=height/100;
    const bmiValue=weight/(heightInMeters*heightInMeters);
    SetBmi(bmiValue.toFixed(2));
    if(bmiValue<18.5){
      SetBmiStatus("Under Weight");
    }
    else if(bmiValue>=18.5 && bmiValue<24.9){
      SetBmiStatus("Normal Weight");

    }
    else if(bmiValue>=25 && bmiValue<29.9){
      SetBmiStatus("Over Weight");
    }
    else{
      SetBmiStatus("Obese");
    }
  }
  else{
    SetBmi(null);
    SetBmiStatus("");
   
  }
}

  return (
    <>
    
     <div className="bmi-calculator">
     <h6>Design By Ashok</h6>
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="text" id="height" value={height} placeholder="Enter the Height" onChange={(e)=>SetHeight(e.target.value)}/>
        </div>
        <div className="input-containerw">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="text" id="weight" value={weight} placeholder="Enter the Weight" onChange={(e)=>SetWeight(e.target.value)} />
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        {bmi!==null && (
          <div className="result">
          <p>Your BMI id : {bmi}</p>
          <p >Status : {bmiStatus}</p>
        </div>
        )}
        
      </div>
      
     </div>
    
    </>
  )
}

export default App
