import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import MeetingTab from '../../../../components/MeetingItem/MeetingItem';
import PeopleTab from '../../../../components/UserListItem/UserListItem';
import NoteListItem from '../../../../components/NoteListItem/NoteListItem';
import styles from './styles';

class NextMeetingDetailScreen extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="ios-paper" /></TabHeading>}>
                        <NoteListItem />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default NextMeetingDetailScreen;
