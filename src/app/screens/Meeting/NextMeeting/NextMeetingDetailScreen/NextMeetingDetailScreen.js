import React, {Component} from 'react';
import { Container, Icon, Content, Button } from 'native-base';
import Header from '../../../../components/Header/Header'
import MeetingStore from "../../../../flux/Meeting/MeetingStore";
import { ListView} from 'react-native'
import MeetingConstants from "../../../../flux/Meeting/MeetingConstants";
import UserStore from "../../../../flux/User/UserStore";
import UserCard from "../../../../components/UserCard/UserCard";
import styles from './styles';

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
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                    right={
                        <Button transparent onPress={() => {this.props.navigation.navigate('user.search.index', { meetingId: meetingItem.getId()})}}>
                            <Icon style={{ color: '#fff'}} name="md-person-add" />
                        </Button>
                    }
                />
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(userItems)}
                        renderRow={userItem => (
                            <UserCard
                                item={userItem}
                                meetingId={meetingItem && meetingItem.getId()}
                                navigation={this.props.navigation}
                            />
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

export default NextMeetingDetailScreen;
