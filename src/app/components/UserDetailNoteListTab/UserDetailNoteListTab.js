import React from 'react';
import {Container, Content, Text} from 'native-base';
import UserNoteList from "../UserNoteList/UserNoteList";
import styles from './styles';

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