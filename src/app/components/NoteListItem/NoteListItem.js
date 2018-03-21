import React from 'react';
import { List, ListItem, Body, Input} from 'native-base';
import styles from './styles';

const NoteListItem = ({ item }) => (
    <List>
        <ListItem style={ styles.listItem }>
            <Body>
                <Input style={ styles.input } value={ item.getText()}/>
            </Body>
        </ListItem>
    </List>
);

export default NoteListItem;