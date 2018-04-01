import React from 'react';
import {Container, Content, Button, Text, Toast} from 'native-base';
import Header from '../../../components/Header/Header'
import UserStore from "../../../flux/User/UserStore";
import UserList from '../../../components/UserList/UserList'
import MeetingConstants from "../../../flux/Meeting/MeetingConstants";

import styles from './styles';
import {createOrUpdateUserItem} from "../../../flux/User/UserActions";

class UserAddFromListScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            userItems: []
        };

        this.goBack = this.goBack.bind(this);
        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    };

    goBack () {
        this.props.modalVisible(false);
    }

    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadItems);
    }

    componentDidMount () {
        UserStore.addChangeListener(this.loadItems);
        this.loadItems();
    };


    loadItems () {
        const meetingId = this.props.meetingId;

        UserStore.getAllItemsExcludeMeetingId(MeetingConstants.STORE_KEY_ITEM + meetingId).then(userItems => {
            return this.setState({ userItems })
        });
    }

    handleItemPress (id) {
        const meetingId = this.props.meetingId;

        UserStore.getItemById(id).then(userItem => {
           userItem.getMeetingIds().push(MeetingConstants.STORE_KEY_ITEM + meetingId);
           createOrUpdateUserItem(userItem);
        });

        Toast.show({
            text: 'Užívateľ bol pridaný.',
            position: 'bottom',
            buttonText: 'OK',
            duration: 3000,
            type: 'success'
        });

        this.goBack();
    }

    render () {
        const { userItems } = this.state;

        return (
            <Container style={ styles.container }>
                <Header
                    title='Zoznam ľudí'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText}>Zrušiť</Text>
                        </Button>
                    }
                />
                <Content>
                    <UserList
                        items={userItems}
                        onItemPress={this.handleItemPress}
                    />
                </Content>
            </Container>
        );
    }
}

export default UserAddFromListScreen;