import React from 'react';
import { Content, List, ListItem, Thumbnail, Text, Body, Input, Right } from 'native-base';
import styles from './styles';

const MeetingListItem = ({ item, onPress }) => (
    <List>
        <ListItem button onPress={() => onPress(item.getId())} style={ styles.listItem }>
            <Body style={{ flex: 2}}>
                <Text>{item.getName()}</Text>
            </Body>
            <Right style={{ flex: 1}}>
                <Text note>{item.getDate()}</Text>
            </Right>
        </ListItem>
    </List>
);

export default MeetingListItem;