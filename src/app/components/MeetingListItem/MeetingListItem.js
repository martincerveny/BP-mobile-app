import React from 'react';
import { List, ListItem, Text, Body, Right } from 'native-base';
import styles from './styles';

// item schodzky zo zoznamu
const MeetingListItem = ({ item, onPress }) => (
    <List>
        <ListItem button onPress={() => onPress(item.getId())} style={ styles.listItem }>
            <Body style={ styles.body}>
                <Text>{item.getName()}</Text>
            </Body>
            <Right style={ styles.right }>
                <Text note>{item.getDate()}</Text>
            </Right>
        </ListItem>
    </List>
);

export default MeetingListItem;