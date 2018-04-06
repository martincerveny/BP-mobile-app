const FacebookApiFetchService = {

    async getUsers (token, term) {
        console.log(token)
        console.log(term)
        const response = await fetch(
            `https://graph.facebook.com/search?q=${term}&limit=100&type=user&fields=picture, first_name, last_name, link, id, name&access_token=${token}`);

        if (response.status == 400 ) {
            return false;
        }

        let jsonData = await response.json();
        return jsonData.data;
    }

};

export default FacebookApiFetchService;