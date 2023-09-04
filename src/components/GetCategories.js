import React, { useEffect , useState } from 'react';
import Select from "react-select";
import ShowQuestions from './ShowQuestions';
import "./styling.css";
import { render } from '@testing-library/react';

const url = process.env.REACT_APP_RAPIDAPI_GET_CATEGORIES;
const rapidapi_key = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidapi_host = process.env.REACT_APP_RAPIDAPI_HOST;
const baseURL = process.env.REACT_APP_RAPIDAPI_GET_QUESTIONS;

export default function GetCategories()	 {
	const [categories, setCategories] = useState([]);
	const [err, setErr] = useState('');
	// const [value, setValue] = useState({});
	const [selected, setSelected] = useState("");
	const [questionsArray,setQuestionsArray] =useState([]);
	const [showQuestion,setShowQuestion] =useState(false);

const getData =  async() =>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': rapidapi_key,
			'X-RapidAPI-Host': rapidapi_host
		}
	};

	 
	try {
		const response = await fetch(url, options);
  
		if (!response.ok) {
		  throw new Error(`Error! status: ${response.status}`);
		}
  
		const result = await response.json();
	   
	
  		
		setCategories(result["trivia_categories"]);
		console.log(result["trivia_categories"]);
	  } catch (err) {
		setErr(err.message);
		
		// console.log(data);

	  }
	


	}


  useEffect(() => {
    getData();
	
  },[]);




  	const handleSelect = (e) => {
		
		setSelected(e.value);
		console.log(e.value);
		// <GetQuestions 
		// selectedCatValue= {e.target.value}
		// />
	}

	let rsOptions = [];
categories.map(categoryObject =>
	rsOptions.push({ label: categoryObject.name, value: categoryObject.id }),
);

const handleSubmit = (e) =>{



	const apiCall = async() => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': rapidapi_key,
			'X-RapidAPI-Host': rapidapi_host
		}
	};
	
	const questionsURL=  `${baseURL}amount=100&category=${selected}`;
	

	try {

		const response = await fetch(questionsURL, options);
  
		if (!response.ok) {
		  throw new Error(`Error! status: ${response.status}`);
		}
  
		const questions = await response.json();
		console.log("selected",selected);
		if (!selected  )
		{
			alert("Please select a category!");
			// setQuestionsArray([]);
			setShowQuestion(false);
			console.log("show question is: ",showQuestion);
		}else {

			setShowQuestion(true);
			setQuestionsArray(questions["results"]);
			console.log(questions["results"]);
		
		}
		
			
			
		
		// if(questionsArray.length==0)
		// {
		// 	alert("No questions for this category yet!");
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// }
		
		
		
		
		
	  } catch (err) {
		setErr(err.message);
		
		// console.log(data);
		
	  }
	}
	
	apiCall();
	
}

	return (
			<div>
				
				<div className="select-category">
				<Select   options={rsOptions}
					value={rsOptions.find(obj => obj.value === selected)}
					placeholder="Select a Category" 
					onChange={handleSelect}
					/>
				</div>
            	<button type="Submit" onClick={handleSubmit}>Show Flashcards</button>
				{console.log("in return: ",showQuestion)}
				{showQuestion ? <ShowQuestions questions={questionsArray} /> : null}

				
            
    	
			</div>
          
	
	);



}