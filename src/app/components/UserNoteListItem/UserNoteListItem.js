import React from 'react';
import { List, ListItem, Text, Body } from 'native-base';
import styles from './styles';

// objekt poznamky v zozname poznamok na karte uzivatela
const UserNoteListItem = ({ item }) => (
    <List>
        <ListItem style={ styles.listItem }>
            <Body>
                <Text style={ styles.text }> {item.getText()}</Text>
            </Body>
        </ListItem>
    </List>
);

export default UserNoteListItem;
