import axios from 'axios';

class PhoneService{
	constructor(){
		this.axios = axios.create({
			baseURL: 'http://localhost:5005/api/phones',
			timeout: 5000,
		});
	}

	getAllPhones = () => this.axios.get('/');
}

export default PhoneService;