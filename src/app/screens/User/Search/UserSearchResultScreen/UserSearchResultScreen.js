import React from 'react';
import { Container, Content, Text, Toast, Button } from 'native-base';
import Header from '../../../../components/Header/Header'
import SearchResultList from '../../../../components/SearchResultList/SearchResultList'
import { ActivityIndicator, View } from 'react-native';
import { FileSystem, WebBrowser } from 'expo';
import { createOrUpdateUserItem } from './../../../../flux/User/UserActions'
import styles from './styles';
import TwitterApiFetchService from "../../../../services/TwitterApi/TwitterApiFetchService";
import MeetingConstants from "../../../../flux/Meeting/MeetingConstants";
import AppUtils from "../../../../utils/AppUtils";

const DEFAULT_IMAGE_URL = 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png';
const TWITTER_URL = 'http://www.twitter.com/';

class UserSearchResultScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: null
        };

        this.goBack = this.goBack.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.handleCreateUserItem = this.handleCreateUserItem.bind(this);
    };

    goBack () {
        this.props.modalVisible(false);
    }

    componentDidMount () {
        this.getSearchResults();
    }

    getSearchResults () {
        if (this.props.term === '') {
            return this.setState({ items: '' });
        }

        //vyhladame ludi
        TwitterApiFetchService.getUsers(this.props.term).then(items => {
            let userItems = [];

            for (let i=0; i < items.length; i++) {
                // uzivatelov bez fotky vynechame
                if (items[i].profile_image_url !== DEFAULT_IMAGE_URL) {
                    userItems.push(items[i]);
                }
            }
            this.setState({ items: userItems })
        });
    }

    handleItemPress (screenName) {
        let url = TWITTER_URL + screenName;
        WebBrowser.openBrowserAsync(url);
    }

    async handleCreateUserItem (item) {
        const meetingId = this.props.meetingId;
        let userId = AppUtils.generateId();
        let path = userId + '.png';

        await FileSystem.downloadAsync(
            item.profile_image_url,
            FileSystem.documentDirectory + path
        );

        let nameArray = item.name.split(" ", 2);

        let userItem = {
            id: userId,
            meetingIds: [MeetingConstants.STORE_KEY_ITEM + meetingId],
            firstName: nameArray[0] ? nameArray[0] : '',
            lastName: nameArray[1] ? nameArray[1] : '',
            image: path,
            age: '',
            address: item.location,
            company: '',
            note: '',
        };

        createOrUpdateUserItem(userItem);

        Toast.show({
            text: 'Užívateľ bol pridaný.',
            position: 'bottom',
            buttonText: 'OK',
            duration: 3000,
            type: 'success'
        });
        this.goBack()
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container } >
                <Header
                    title='Výsledky hľadania'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText}>Zrušiť</Text>
                        </Button>
                    }
                />
                <Content>
                    {
                        items == null
                            ? (<View style={ styles.loading }><ActivityIndicator animating={true} size="large" color="#e74c3c" /></View>)
                            : (items == ''
                                ? (<View style={ styles.noResultsView }><Text style={ styles.noResultsText }>Žiadne výsledky</Text></View>)
                                : (<SearchResultList createItemOnPress={this.handleCreateUserItem} onItemPress={this.handleItemPress} items={items}/>))
                    }

                </Content>
            </Container>
        );
    }
}

export default UserSearchResultScreen;