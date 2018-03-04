import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
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

NextMeetingDetailScreen.navigationOptions = {
    headerTitle: 'Úvodná schôdzka',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default NextMeetingDetailScreen;
