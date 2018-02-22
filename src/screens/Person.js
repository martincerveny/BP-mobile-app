import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import PersonTab from '../components/PersonTab';
import MeetingListTab from '../components/MeetingListTab';
import PersonNotesTab from '../components/PersonNotesTab';

export default class Person extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-contact" /></TabHeading>}>
                        <PersonTab />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="list" /></TabHeading>}>
                        <MeetingListTab />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="paper" /></TabHeading>}>
                        <PersonNotesTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}