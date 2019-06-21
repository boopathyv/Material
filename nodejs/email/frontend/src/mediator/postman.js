const axios = require('axios');
const mainUrl = 'http://localhost:3008';


function getConfig(){
	return {
		headers: {
			'Content-Type':'application/json;charset=UTF-8',
			'x-access-token':localStorage.getItem('x-access-token'),
			'x-refresh-token':localStorage.getItem('x-refresh-token')
		}
	};
}

async function get(url,queryData,cb){
	let getUrl = mainUrl+url;
	let params = getConfig();
	params['params'] = queryData;
	axios.get(getUrl,params)
		.then(response => {
		if (response) {
		  cb(null,response);
		}
	}).catch(error => {
		cb(error,null);
	})
}

async function post(url,data,cb){
	let postUrl = mainUrl+url;
	axios.post(
		postUrl,
		JSON.stringify(data),
		getConfig())
		.then(response => {
		if (response) {
			cb(null,response);
		}
	}).catch(error => {
		cb(error,null);
	})
}

export default {get,post};