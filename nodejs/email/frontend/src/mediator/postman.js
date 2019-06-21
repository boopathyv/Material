const axios = require('axios');
const mainUrl = 'http://localhost:3008';


const config = {
	headers: {
		'Content-Type':'application/json;charset=UTF-8'
	}
}

async function get(url,queryData,cb){
	let getUrl = mainUrl+url;
	axios.get(getUrl,{data :queryData})
		.then(response => {
		if (response) {
		  console.log(response);
		}
	}).catch(error => {
		console.log(error)
	})
}

async function post(url,data,cb){
	let postUrl = mainUrl+url;
	axios.post(
		postUrl,
		JSON.stringify(data),
		config)
		.then(response => {
		if (response) {
		  console.log(response);
		}
	}).catch(error => {
		console.log(error)
	})
}

export default {get,post};