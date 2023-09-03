import React, { useEffect , useState } from 'react';
import Select from "react-select";

const url = process.env.REACT_APP_RAPIDAPI_GET_CATEGORIES;
const rapidapi_key = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidapi_host = process.env.REACT_APP_RAPIDAPI_HOST;


export default function GetCategories()	 {
	const [categories, setCategories] = useState([]);
	const [err, setErr] = useState('');
	// const [value, setValue] = useState({});
	const [selected, setSelected] = useState({});
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
		// setCategories(e.target.value);
		console.log(e.target.value);
	}
	
		


	
	return (
			<div>
				<h2>Select Flashcard Category</h2>
				
				<select onChange={handleSelect}
				
				>
				{categories.map((categoryObject, iterator) => {
							return(
							<option value={categoryObject.id} label={categoryObject.name}>
								
							</option>
							)
				})
				}

      </select>


				
				
					{/* // return (
					// 	<button  key={categoryObject.id}>
					// 	 {categoryObject.name} 
					//    </button>
					//    ); */}
					
            
    	
			</div>
          
	
	);



}