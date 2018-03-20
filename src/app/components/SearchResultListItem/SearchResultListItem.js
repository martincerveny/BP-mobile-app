import React from 'react';
import { Button, List, ListItem, Thumbnail, Text, Body, Left, Right, Icon } from 'native-base';

import styles from './styles';

const SearchResultListItem = ({ item, onPress, createOnPress }) => (
    <List>
        <ListItem button onPress={() => onPress(item.link)}>
            <Thumbnail source={{uri: item.picture.data.url}} />
            <Body>
                <Text style={{ color: 'black'}}>{item.name}</Text>
            </Body>
            <Right>
                <Button transparent onPress={() => createOnPress(item)}>
                    <Icon style={{ color: 'black'}} name="md-person-add" />
                </Button>
            </Right>
        </ListItem>
    </List>
);

export default SearchResultListItem;