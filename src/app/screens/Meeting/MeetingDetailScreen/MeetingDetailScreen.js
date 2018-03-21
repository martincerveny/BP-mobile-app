import React from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import MeetingDetailUserListTab from '../../../components/MeetingDetailUserListTab/MeetingDetailUserListTab';
import NoteListItem from '../../../components/NoteListItem/NoteListItem';
import MeetingDetailTab from '../../../components/MeetingDetailTab/MeetingDetailTab';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import UserStore from "../../../flux/User/UserStore";
import Header from '../../../components/Header/Header'
import MeetingConstants from "../../../flux/Meeting/MeetingConstants";
import styles from './styles';

class MeetingDetailScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: '',
            userItems: []
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.loadUserItems = this.loadUserItems.bind(this);
        this.handleUserItemPress = this.handleUserItemPress.bind(this);
        this.handleUpdateItemPress = this.handleUpdateItemPress.bind(this);
    };

    componentDidMount () {
        UserStore.addChangeListener(this.loadUserItems);

        this.loadItem();
        this.loadUserItems();
    };

    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadUserItems);
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

    goBack () {
        this.props.navigation.goBack()
    }

    handleUserItemPress (id) {
        this.props.navigation.navigate("user.detail", { userId: id})
    }

    handleUpdateItemPress (id) {
        this.props.navigation.navigate("meeting.update", { meetingId: id})
    }

    render () {
        const { meetingItem, userItems } = this.state;

        return (
            <Container>
                <Header
                    title={meetingItem.name}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                    right={
                        <Button transparent onPress={() => this.handleUpdateItemPress(meetingItem.getId())}>
                            <Icon style={{ color: '#fff'}} name="create" />
                        </Button>
                    }
                />
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="ios-keypad" /></TabHeading>}>
                       <MeetingDetailTab
                           meetingItem={meetingItem}
                       />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-people" /></TabHeading>}>
                        <MeetingDetailUserListTab
                            userItems={userItems}
                            onUserItemPress={this.handleUserItemPress}
                            navigation={this.props.navigation}
                            meetingId={meetingItem.id}
                        />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-paper" /></TabHeading>}>
                        {/*<NoteListItem />*/}
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default MeetingDetailScreen;