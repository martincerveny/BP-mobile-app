import React from 'react';
import { Container } from 'native-base';
import styles from './styles';
import {ListView} from "react-native";
import UserCardItem from "../UserCardItem/UserCardItem";

//zoznam objektov usercard
const UserCardList = ({ userItems, meetingItem, navigation }) => (
    <Container style={ styles.container }>
        <ListView
            enableEmptySections
            dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(userItems)}
            renderRow={userItem => (
                <UserCardItem
                    item={userItem}
                    meetingId={meetingItem && meetingItem.getId()}
                    navigation={navigation}
                />
            )}
        />
    </Container>
);

export default UserCardList;