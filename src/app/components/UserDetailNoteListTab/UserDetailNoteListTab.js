import React from 'react';
import { Container, Content } from 'native-base';
import UserNoteList from "../UserNoteList/UserNoteList";
import styles from './styles';

const UserDetailNoteListTab = ({ noteItems, meetingItems }) => (
    <Container style={ styles.container }>
        <Content>
            <UserNoteList
                noteItems={noteItems}
                meetingItems={meetingItems}
            />
        </Content>
    </Container>
);

export default UserDetailNoteListTab;