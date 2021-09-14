export default class UserService {

    APP_TOKEN = 'ed85967e2c5a5049715470ceb936d02806ec459ff0d8bb38057ff0a145c37d95';
    BASE_URL = 'https://gorest.co.in/public/v1/users';

    REQUEST_HEADER = {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${this.APP_TOKEN}`
    }

    async getAll(){
        const resp = await fetch(`${this.BASE_URL}`);
        return await resp.json();
    }

    async createUser(payload) {
        const resp = await fetch(`${this.BASE_URL}`, {
            method: 'POST',
            headers: this.REQUEST_HEADER,
            body: JSON.stringify(payload)
        });
        return await resp.json();
    }

}
