import { queryByRole } from '@testing-library/react';
import React, { useEffect , useState } from 'react';
import Card from './Card';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

export default function ShowQuestions({questions})	 {

let randomQ={};
let questionsCopy = questions;
   
const [next, setNext] = useState(false);


const handleNext =() => {

    setNext(true);
    randomQ = Math.floor(Math.random()*questionsCopy.length);
    console.log("next", next);
    
    console.log("new question",questionsCopy[randomQ]);
   

  
       
}   



randomQ = Math.floor(Math.random()*questionsCopy.length);  
    return (
        
        <div className="question-card">
            <Card frontSide={questionsCopy[randomQ].question} backSide ={questionsCopy[randomQ].correct_answer} />
            <button className="next" onClick={handleNext}>Next</button>
            {next ?  getActiveElement.bind(<Card frontSide={questionsCopy[randomQ].question} backSide ={questionsCopy[randomQ].correct_answer} />) : null}
        </div>
    )
    
 }