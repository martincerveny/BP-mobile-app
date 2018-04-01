import React from 'react';
import { Container, Content, Text, Toast, Button, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'
import SearchResultList from '../../../../components/SearchResultList/SearchResultList'
import { ActivityIndicator, View } from 'react-native';
import { WebBrowser, FileSystem } from 'expo';
import { createOrUpdateUserItem } from './../../../../flux/User/UserActions'
import styles from './styles';
import FacebookApiFetchService from "../../../../services/FacebookApi/FacebookApiFetchService";
import MeetingConstants from "../../../../flux/Meeting/MeetingConstants";
import AppUtils from "../../../../utils/AppUtils";
import { deleteFacebookItem } from "../../../../flux/Facebook/FacebookActions";

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

        FacebookApiFetchService.getUsers(this.props.token, this.props.term).then(items => {
            // v pripade ulozenia neplatneho tokenu sa zmaze z AsyncStorage, a je vynutene nove prihlasenie
            if (items === false) {
                deleteFacebookItem();
                Toast.show({
                    text: 'Je potrebné sa prihlásiť.',
                    position: 'bottom',
                    buttonText: 'OK',
                    duration: 3000,
                    type: 'danger'
                });
                this.goBack();
            } else {
                this.setState({ items })
            }
        });
    }

    handleItemPress (url) {
        WebBrowser.openBrowserAsync(url);
    }

    async handleCreateUserItem (item) {
        const meetingId = this.props.meetingId;
        let userId = AppUtils.generateId();
        let path = userId + '.png';

        await FileSystem.downloadAsync(
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