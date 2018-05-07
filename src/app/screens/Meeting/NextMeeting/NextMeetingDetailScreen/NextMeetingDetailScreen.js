import React, {Component} from 'react';
import {Container, Icon, Content, Button, Text} from 'native-base';
import Header from '../../../../components/Header/Header'
import MeetingStore from "../../../../flux/Meeting/MeetingStore";
import MeetingConstants from "../../../../flux/Meeting/MeetingConstants";
import UserStore from "../../../../flux/User/UserStore";
import styles from './styles';
import UserCardList from "../../../../components/UserCardList/UserCardList";

//obrazovka detailu najblizsich schodzok
class NextMeetingDetailScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: null,
            userItems: '',
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.loadUserItems = this.loadUserItems.bind(this);
    };

    componentDidMount () {
        UserStore.addChangeListener(this.loadUserItems);
        MeetingStore.addChangeListener(this.loadItem);

        this.loadItem();
        this.loadUserItems();
    };

    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadUserItems);
        MeetingStore.removeChangeListener(this.loadItem);
    }

    goBack () {
        this.props.navigation.goBack()
    }

    loadItem () {
        const meetingId = this.props.navigation.state.params.meetingId;

        MeetingStore.getItemById(meetingId).then(meetingItem => {
            return this.setState({ meetingItem })
        });
    };

    loadUserItems () {
        const meetingId = this.props.navigation.state.params.meetingId;

        UserStore.getAllItemsByMeetingId(MeetingConstants.STORE_KEY_ITEM + meetingId).then(userItems => {
            return this.setState({ userItems })
        });
    }

    render() {
        const { meetingItem, userItems } = this.state;

        return (
            <Container style={ styles.container }>
                <Header
                    title={meetingItem && meetingItem.getName()}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={ styles.icon} name="arrow-round-back" />
                        </Button>
                    }
                    right={
                        <Button transparent onPress={() => {this.props.navigation.navigate('user.search.index', { meetingId: meetingItem.getId()})}}>
                            <Icon style={styles.icon} name="md-person-add" />
                        </Button>
                    }
                />
                <Content>
                    {
                        userItems != ''
                            ? (
                                <UserCardList
                                    navigation={ this.props.navigation }
                                    meetingItem={meetingItem}
                                    userItems={userItems}
                                />
                            )
                            : (<Text style={ styles.noResultsText }>Pridajte ľudí ku schôdzke.</Text>)
                    }
                </Content>
            </Container>
        );
    }
}

export default NextMeetingDetailScreen;
