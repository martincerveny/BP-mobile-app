import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Content, List, ListItem, Body, Input, Right, Button } from 'native-base';
import UserDetailTab from '../../../components/UserDetailTab/UserDetailTab';
import UserNoteListItem from '../../../components/UserNoteListItem/UserNoteListItem';
import Header from '../../../components/Header/Header';
import UserStore from "../../../flux/User/UserStore";
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import UserDetailMeetingListTab from '../../../components/UserDetailMeetingListTab/UserDetailMeetingListTab';
import styles from './styles';

class UserDetailScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userItem: '',
            meetingItems: []
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.handleMeetingItemPress = this.handleMeetingItemPress.bind(this);
    };

    goBack () {
        this.props.navigation.goBack()
    }

    componentDidMount () {
        this.loadItem();
    };

    loadItem () {
        const userId = this.props.navigation.state.params.userId;
        UserStore.getItemById(userId).then(userItem => {
            MeetingStore.getAllItemsByMeetingIds(userItem.getMeetingIds()).then(meetingItems => {
                this.setState({ meetingItems })
            });
            this.setState({ userItem })
        });

    };

    handleMeetingItemPress (id) {
        this.props.navigation.navigate("meeting.detail", { meetingId: id})
    }

    render () {
        const { userItem, meetingItems } = this.state;

        return (
            <Container>
                <Header
                    title={userItem.name}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                    right={
                            <Button transparent>
                                <Icon style={{ color: '#fff'}} name="create" />
                            </Button>
                    }
                />
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-contact" /></TabHeading>}>
                        <UserDetailTab
                            userItem={userItem}
                        />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="list" /></TabHeading>}>
                    <UserDetailMeetingListTab
                        meetingItems={meetingItems}
                        onMeetingItemPress={this.handleMeetingItemPress}
                    />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="paper" /></TabHeading>}>
                        <UserNoteListItem />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default UserDetailScreen