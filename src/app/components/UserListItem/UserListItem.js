import React from 'react';
import { Content, List, ListItem, Thumbnail, Text, Body, Input, Right } from 'native-base';
import styles from './styles';

const UserListItem = ({ item, onPress }) => (
    <List>
        <ListItem  button onPress={() => onPress(item.getId())} style={ styles.listItem }>
            <Thumbnail square size={80} source={require('../../../resources/images/person-flat.png')} />
            <Body>
                <Text>{item.getName()}</Text>
            </Body>
        </ListItem>
    </List>
);

export default UserListItem;