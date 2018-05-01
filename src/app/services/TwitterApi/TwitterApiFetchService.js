import twitter from 'react-native-twitter';
import TwitterApiKeys from "./TwitterApiKeys";

let tokens = {
    consumerKey: TwitterApiKeys.CONSUMER_KEY,
    consumerSecret: TwitterApiKeys.CONSUMER_SECRET,
    accessToken: TwitterApiKeys.ACCESS_TOKEN,
    accessTokenSecret: TwitterApiKeys.ACCESS_TOKEN_SECRET
};

const {rest} = twitter(tokens);

const TwitterApiFetchService = {

    async getUsers (term) {
        return rest.get('users/search', {q: term});
    }

};

export default TwitterApiFetchService;