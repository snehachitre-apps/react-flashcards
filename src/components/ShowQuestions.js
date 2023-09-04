import { queryByRole } from '@testing-library/react';
import React, { useEffect , useState } from 'react';
import Card from './Card';
import { getActiveElement } from '@testing-library/user-event/dist/utils';


export default function ShowQuestions({questions})	 {

let randomQ={};
let questionsCopy = questions;
 
const [next, setNext] = useState(false);
const [state,setState] = useState();
let counter=0;


const handleNext =() => {

    setNext(true);
    randomQ = Math.floor(Math.random()*questionsCopy.length);

    
    console.log("new question",questionsCopy[randomQ]);
    setState( <Card frontSide={questionsCopy[randomQ].question} backSide ={questionsCopy[randomQ].correct_answer} />);
    
}   
//first question
randomQ = Math.floor(Math.random()*questionsCopy.length);  
counter++;

    return (
        
        <div className="question-card">
             
            {counter==1 ? <Card frontSide={questionsCopy[randomQ].question.replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\'")} backSide ={questionsCopy[randomQ].correct_answer} />:null}

          {/* figure out a way  to replace all special characters code wth the characters*/}
         
            <button className="next" onClick={handleNext}>Next</button>
            {next && counter>1?   <Card frontSide={questionsCopy[randomQ].question.replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\'")} backSide ={questionsCopy[randomQ].correct_answer} />:null} 
         
           
        </div>
    )
    
 }