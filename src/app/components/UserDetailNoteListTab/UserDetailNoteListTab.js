import React from 'react';
import {Container, Text} from 'native-base';
import UserNoteList from "../UserNoteList/UserNoteList";
import styles from './styles';

//poznamky na detaile uzivatela
const UserDetailNoteListTab = ({ noteItems, meetingItems }) => (
    <Container style={ styles.container }>
            {
                noteItems != ''
                    ? (<UserNoteList noteItems={noteItems} meetingItems={meetingItems}/>)
                    : (<Text style={ styles.noResultsText }>Žiadne poznámky</Text>)
            }
    </Container>
);

export default UserDetailNoteListTab;