import twitter from 'react-native-twitter';
import TwitterApiConstants from "./TwitterApiConstants";

let tokens = {
    consumerKey: TwitterApiConstants.CONSUMER_KEY,
    consumerSecret: TwitterApiConstants.CONSUMER_SECRET,
    accessToken: TwitterApiConstants.ACCESS_TOKEN,
    accessTokenSecret: TwitterApiConstants.ACCESS_TOKEN_SECRET
};

const {rest} = twitter(tokens);

const TwitterApiFetchService = {

    async getUsers (term) {
        return rest.get('users/search', {q: term});
    }

};

export default TwitterApiFetchService;