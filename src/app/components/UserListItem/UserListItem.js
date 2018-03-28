import React from 'react';
import { Content, List, ListItem, Thumbnail, Text, Body, Input, Right } from 'native-base';
import styles from './styles';
import {FileSystem} from "expo";

const UserListItem = ({ item, onPress }) => (
    <List>
        <ListItem  button onPress={() => onPress(item.getId())}>
            {
                item.getImage() == null
                ? (<Thumbnail size={80} source={require('./../../../resources/images/person-flat.png')} />)
                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + item.getImage()}} />)
            }
            <Body>
                <Text>{item.getFirstName()} {item.getLastName()}</Text>
            </Body>
        </ListItem>
    </List>
);

export default UserListItem;