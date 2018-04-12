import React from 'react';
import { Container, Text } from 'native-base';
import styles from './styles';
import UserCardList from "../UserCardList/UserCardList";

const MeetingDetailNoteListTab = ({ userItems, meetingItem, navigation }) => (
    <Container style={ styles.container }>
        {
            userItems != ''
                ? (
                    <UserCardList
                        navigation={navigation}
                        meetingItem={meetingItem}
                        userItems={userItems}
                    />
                )
                : (<Text style={ styles.noResultsText }>Pridajte ľudí ku schôdzke.</Text>)
        }
    </Container>
);

export default MeetingDetailNoteListTab;