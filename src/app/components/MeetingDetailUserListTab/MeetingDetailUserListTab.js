import React from 'react';
import {Container, Content, Button, Text, Icon, View} from 'native-base';
import styles from './styles';
import UserSwipableList from "../UserSwipableList/UserSwipableList";

//komponenta zobrazujuca ucastnikov schodzky
const MeetingDetailUserListTab = ({ userItems, onUserItemPress, navigation, meetingId }) => (
    <Container style={ styles.container }>
        <Content>
            <View style={ styles.buttonContainer }>
                <Button block iconLeft danger onPress={() => {navigation.navigate('user.search.index', { meetingId: meetingId})}}>
                    <Icon name='md-person-add' />
                    <Text>Pridať osobu ku schôdzke</Text>
                </Button>
            </View>
            <UserSwipableList
                items={userItems}
                onItemPress={onUserItemPress}
                meetingId={meetingId}
            />
        </Content>
    </Container>
);

export default MeetingDetailUserListTab;