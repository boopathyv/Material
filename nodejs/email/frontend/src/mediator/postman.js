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
		if (!response.data.error) {
			setHeaders(response);
			cb(null,response);
		}else{
			cb(response['data']['error'],null);
		}
	}).catch(error => {
			cb(error.message,null);
	})
}

async function post(url,data,cb){
	let postUrl = mainUrl+url;
	axios.post(
		postUrl,
		JSON.stringify(data),
		getConfig())
		.then(response => {
		if (!response.data.error) {
			setHeaders(response);
			cb(null,response);
		}else{
			cb(response['data']['error'],null);
		}
	}).catch(error => {
		cb(error.message,null);
	})
}

function setHeaders(response){
	if(response['headers']['x-access-token']){
		localStorage.setItem('x-access-token',response['headers']['x-access-token']);
	}
	if(response['headers']['x-refresh-token']){
		localStorage.setItem('x-refresh-token',response['headers']['x-refresh-token']);
	}
}

export default {get,post};