import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import MeetingItem from '../../../components/MeetingItem/MeetingItem';
import PeopleTab from '../../../components/UserListItem/UserListItem';
import NoteListItem from '../../../components/NoteListItem/NoteListItem';
import styles from './styles';

class MeetingDetailScreen extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-keypad" /></TabHeading>}>
                        <MeetingItem />
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