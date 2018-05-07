import React from 'react';
import { List, ListItem, Thumbnail, Text, Body } from 'native-base';
import {FileSystem} from "expo";
import styles from './styles';

//objekt uzivatela v zozname
const UserListItem = ({ item, onPress }) => (
    <List>
        <ListItem  button onPress={() => onPress(item.getId())}>
            {
                item.getImage() == null
                ? (<Thumbnail size={80} source={require('../../../resources/assets/images/person-flat.png')} />)
                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + item.getImage()}} />)
            }
            <Body>
                <Text>{item.getFirstName()} {item.getLastName()}</Text>
            </Body>
        </ListItem>
    </List>
);

export default UserListItem;