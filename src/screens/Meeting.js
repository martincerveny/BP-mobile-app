import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import MeetingTab from '../components/MeetingTab';
import PeopleTab from '../components/PeopleTab';
import NotesTab from '../components/NotesTab';

export default class Meeting extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-keypad" /></TabHeading>}>
                        <MeetingTab />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-people" /></TabHeading>}>
                        <PeopleTab navigation={ this.props.navigation }/>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-paper" /></TabHeading>}>
                        <NotesTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}