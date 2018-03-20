import React from 'react';
import { Container, Content, Text, Toast, Button, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'
import SearchResultList from '../../../../components/SearchResultList/SearchResultList'
import { ActivityIndicator, View } from 'react-native';
import { WebBrowser, FileSystem } from 'expo';
import { createUserItem } from './../../../../flux/User/UserActions'
import styles from './styles';
import FacebookApiFetchService from "../../../../services/FacebookApi/FacebookApiFetchService";
import MeetingConstants from "../../../../flux/Meeting/MeetingConstants";

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
        this.props.navigation.goBack()
    }

    componentDidMount () {
        this.getSearchResults();
    }

    getSearchResults () {
        if (this.props.navigation.state.params.term === '') {
            return this.setState({ items: '' });
        }

        FacebookApiFetchService.getUsers(this.props.navigation.state.params.token, this.props.navigation.state.params.term).then(items => {
            this.setState({ items })
        });
    }

    handleItemPress (url) {
        WebBrowser.openBrowserAsync(url);
    }

    generateId() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }


    handleCreateUserItem (item) {
        const meetingId = this.props.navigation.state.params.meetingId
        let userId = this.generateId();
        let path = userId + '.png';

        FileSystem.downloadAsync(
            item.picture.data.url,
            FileSystem.documentDirectory + path
        );

        let userItem = {
            id: userId,
            meetingIds: [MeetingConstants.STORE_KEY_ITEM + meetingId],
            firstName: item.first_name,
            lastName: item.last_name,
            image: path,
            age: '',
            address: '',
            company: '',
            note: '',
        };

        createUserItem(userItem);
        Toast.show({
            text: 'Užívateľ bol pridaný.',
            position: 'bottom',
            buttonText: 'OK',
            duration: 3000,
            type: 'success'
        });
        this.props.navigation.goBack()
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container } >
                <Header
                    title='Výsledky hľadania'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
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