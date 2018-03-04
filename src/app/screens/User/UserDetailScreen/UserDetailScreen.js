import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import UserItem from '../../../components/UserItem/PersonTab';
import MeetingListItem from '../../../components/MeetingListItem/MeetingListItem';
import UserNoteListItem from '../../../components/UserNoteListItem/UserNoteListItem';
import styles from './styles';
import UserListScreen from "../UserListScreen/UserListScreen";

class UserDetailScreen extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-contact" /></TabHeading>}>
                        <UserItem />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="list" /></TabHeading>}>
                        <MeetingListItem />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="paper" /></TabHeading>}>
                        <UserNoteListItem />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

UserDetailScreen.navigationOptions = {
    headerTitle: 'Jan Novotný',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default UserDetailScreen