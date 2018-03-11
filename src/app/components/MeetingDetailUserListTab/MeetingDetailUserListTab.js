import React from 'react';
import { Container, Content } from 'native-base';
import UserList from '../../components/UserList/UserList'
import styles from './styles';

const MeetingDetailUserListTab = ({ userItems, onUserItemPress }) => (
    <Container style={ styles.container }>
        <Content>
            <UserList
                items={userItems}
                onItemPress={onUserItemPress}
            />
        </Content>
    </Container>
);

export default MeetingDetailUserListTab;