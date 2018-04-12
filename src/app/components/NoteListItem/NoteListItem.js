import React from 'react';
import { List, ListItem, Body, Input, Button, Icon, Text } from 'native-base';
import styles from './styles';
import {createNoteItem} from "../../flux/Note/NoteActions";

const NoteListItem = ({ item, }) => (
    <List>
        <ListItem style={styles.listItem}>
            <Body>
                <Text>{ item.getText() }</Text>
            </Body>
        </ListItem>
    </List>
);

export default NoteListItem;