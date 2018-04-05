import React from 'react';
import { Container, Content, Button, Text, Icon } from 'native-base';
import styles from './styles';
import UserSwipableList from "../UserSwipableList/UserSwipableList";

const MeetingDetailUserListTab = ({ userItems, onUserItemPress, navigation, meetingId }) => (
    <Container style={ styles.container }>
        <Content>
            <Button style={{ marginLeft: 136, marginTop: 10, marginBottom: 10 }} iconLeft danger onPress={() => {navigation.navigate('user.search.index', { meetingId: meetingId})}}>
                <Icon name='md-person-add' />
                <Text>Pridať</Text>
            </Button>
            <UserSwipableList
                items={userItems}
                onItemPress={onUserItemPress}
                meetingId={meetingId}
            />
        </Content>
    </Container>
);

export default MeetingDetailUserListTab;