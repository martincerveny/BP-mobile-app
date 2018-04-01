import React from 'react';
import { Container, Content, Button, Text, Icon } from 'native-base';
import UserList from '../../components/UserList/UserList'
import styles from './styles';

const MeetingDetailUserListTab = ({ userItems, onUserItemPress, navigation, meetingId }) => (
    <Container style={ styles.container }>
        <Content>
            <Button style={{ marginLeft: 136, marginTop: 10, marginBottom: 10 }} iconLeft danger onPress={() => {navigation.navigate('user.search.index', { meetingId: meetingId})}}>
                <Icon name='add' />
                <Text>Pridať</Text>
            </Button>
            <UserList
                items={userItems}
                onItemPress={onUserItemPress}
            />
        </Content>
    </Container>
);

export default MeetingDetailUserListTab;