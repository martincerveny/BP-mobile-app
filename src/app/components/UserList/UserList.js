import React from 'react';
import { SectionList} from 'react-native';
import UserListItem from './../UserListItem/UserListItem';
import {ListItem, Text} from "native-base";

import styles from './styles';

//zoskupenie zoznamu podla abecedy
const makeSections = (items) => {
    //zoskupi podla prveho pismena nazvu - podla abecedy
    const groupedItems = _.groupBy(items, item => item.getFirstName().substr(0,1).toUpperCase());

    const ordered = {};

    //zoradi podla abecedy
    const orderedKeys = Object.keys(groupedItems).sort();

    orderedKeys.forEach(function (key) {
        ordered[key] = groupedItems[key]
    });

    let result = [];

    // vytvori sekcie data a key pre sectionList
    Object.keys(ordered).forEach(function (key) {
        result.push({
            key: key,
            data: ordered[key]
        })
    });

    return result;
};


//komponenta zoznamu uzivatelov
const UserList = ({ items, onItemPress }) => {
    const sections = makeSections(items);
    return (
        <SectionList
            renderItem={({item, index}) => {
                return (
                    <UserListItem
                        item={item}
                        onPress={onItemPress}
                        index={index}
                    />
                )
            }}
            renderSectionHeader={({section}) => {
                return (
                    <ListItem itemDivider style={ styles.listItem }>
                        <Text style={ styles.text}>{section.key}</Text>
                    </ListItem>
                )
            }}
            sections={sections}
            keyExtractor={(item, index) => index}
        >
        </SectionList>
    )
};

export default UserList;