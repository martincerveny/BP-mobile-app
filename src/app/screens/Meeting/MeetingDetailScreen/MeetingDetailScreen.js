import React from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import PeopleTab from '../../../components/UserListItem/UserListItem';
import NoteListItem from '../../../components/NoteListItem/NoteListItem';
import MeetingDetailTab from '../../../components/MeetingDetailTab/MeetingDetailTab';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import Header from '../../../components/Header/Header'

import styles from './styles';

class MeetingDetailScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: ''
        };

        this.goBack = this.goBack.bind(this)
        this.loadItem = this.loadItem.bind(this);
    };

    componentDidMount () {
        this.loadItem();
    };

    loadItem () {
        const meetingId = this.props.navigation.state.params.meetingId;
        MeetingStore.getItemById(meetingId).then(meetingItem => {
            return this.setState({ meetingItem })
        });

    };

    goBack () {
        this.props.navigation.goBack()
    }

    render () {
        const { meetingItem } = this.state;

        return (
            <Container>
                <Header
                    title={meetingItem.name}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
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
                        <PeopleTab navigation={ this.props.navigation }/>
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