import React from 'react';
import { Button, List, ListItem, Thumbnail, Text, Body, Right, Icon } from 'native-base';

import styles from './styles';

//objekt vyhladanej osoby
const SearchResultListItem = ({ item, createOnPress, onPress }) => (
    <List>
        <ListItem button onPress={() => onPress(item.screen_name)}>
            <Thumbnail source={{uri: item.profile_image_url}} />
            <Body>
                <Text style={ styles.text}>{item.name}</Text>
                <Text note>{item.location}</Text>
            </Body>
            <Right>
                <Button transparent onPress={() => createOnPress(item)}>
                    <Icon style={ styles.text} name="md-person-add" />
                </Button>
            </Right>
        </ListItem>
    </List>
);

export default SearchResultListItem;