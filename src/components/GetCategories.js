const url = process.env.REACT_APP_RAPIDAPI_GET_CATEGORIES;
const rapidapi_key = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidapi_host = process.env.REACT_APP_RAPIDAPI_HOST;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': rapidapi_key,
		'X-RapidAPI-Host': rapidapi_host
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}