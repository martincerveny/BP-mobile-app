import React from 'react';
import { Container, Content, Button, Text, Icon } from 'native-base';
import styles from './styles';
import UserSwipableList from "../UserSwipableList/UserSwipableList";
import UserCardList from "../UserCardList/UserCardList";

const MeetingDetailNoteListTab = ({ userItems, meetingItem, navigation, meetingId }) => (
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