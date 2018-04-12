import React from 'react';
import {Container, Content, Text} from 'native-base';
import MeetingList from '../../components/MeetingList/MeetingList'
import styles from './styles';


const UserDetailMeetingListTab = ({ meetingItems, onMeetingItemPress }) => (
    <Container style={ styles.container }>
            {
                meetingItems != ''
                    ? (<MeetingList items={meetingItems} onItemPress={onMeetingItemPress}/>)
                    : (<Text style={ styles.noResultsText }>Osoba nie je priradená ku žiadnej schôdzke.</Text>)
            }
    </Container>
);

export default UserDetailMeetingListTab;