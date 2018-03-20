const FacebookApiFetchService = {

    async getUsers (token, term) {
        const response = await fetch(
            `https://graph.facebook.com/search?q=${term}&limit=100&type=user&fields=picture, first_name, last_name, link, id, name&access_token=${token}`);

        let jsonData = await response.json();
        return jsonData.data;
    }

};

export default FacebookApiFetchService;