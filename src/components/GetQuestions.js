const url = process.env.REACT_APP_RAPIDAPI_GET_QUESTIONS;
const rapidapi_key = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidapi_host = process.env.REACT_APP_RAPIDAPI_HOST;
// amount=100&category=9
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cdaa40518amsh8fec091ee2b8834p11faf8jsn05dfdd502f31',
		'X-RapidAPI-Host': 'trivia-quiz-questions-api.p.rapidapi.com'
	}
};
export default async function GetQuestions () {


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


}