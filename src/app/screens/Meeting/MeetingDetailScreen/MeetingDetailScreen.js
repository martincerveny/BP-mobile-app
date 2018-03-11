import React from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import MeetingDetailUserListTab from '../../../components/MeetingDetailUserListTab/MeetingDetailUserListTab';
import NoteListItem from '../../../components/NoteListItem/NoteListItem';
import MeetingDetailTab from '../../../components/MeetingDetailTab/MeetingDetailTab';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import UserStore from "../../../flux/User/UserStore";
import Header from '../../../components/Header/Header'

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

    };

    componentDidMount () {
        this.loadItem();
        this.loadUserItems();
    };

    loadItem () {
        const meetingId = this.props.navigation.state.params.meetingId;
        MeetingStore.getItemById(meetingId).then(meetingItem => {
            return this.setState({ meetingItem })
        });

    };

    /**
     * @TODO vybrat ludi len k danej schodzke podla meetingIds
     */
    loadUserItems () {
        const meetingId = this.props.navigation.state.params.meetingId;

        UserStore.getAllItems().then(userItems => {
            return this.setState({ userItems })
        });
    }

    goBack () {
        this.props.navigation.goBack()
    }

    handleUserItemPress (id) {
        this.props.navigation.navigate("user.detail", { userId: id})
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
                        <Button transparent onPress={() => this.props.navigation.navigate("user.search.index")}>
                            <Icon style={{ color: '#fff'}} name="md-person-add" />
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
                        />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-paper" /></TabHeading>}>
                        <NoteListItem />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default MeetingDetailScreen;