import React from 'react';
import { Container, Content } from 'native-base';
import MeetingList from '../../components/MeetingList/MeetingList'
import styles from './styles';

const UserDetailMeetingListTab = ({ meetingItems, onMeetingItemPress }) => (
    <Container style={ styles.container }>
        <Content>
            <MeetingList
                items={meetingItems}
                onItemPress={onMeetingItemPress}
            />
        </Content>
    </Container>
);

export default UserDetailMeetingListTab;