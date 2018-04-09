import React from 'react';
import { List, ListItem, Text, Body } from 'native-base';
import styles from './styles';

const UserNoteListItem = ({ item }) => (
    <List>
        <ListItem style={ styles.listItem }>
            <Body>
                <Text style={{ marginTop: 5}}> {item.getText()}</Text>
            </Body>
        </ListItem>
    </List>
);

export default UserNoteListItem;
