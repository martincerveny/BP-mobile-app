import React from 'react';
import { SectionList} from 'react-native';
import NextMeetingListItem from './../NextMeetingListItem/NextMeetingListItem';
import {Card, CardItem, Text} from "native-base";

import styles from './styles';

const makeSections = (items) => {
    //zoskupi podla datumu
    const groupedItems = _.groupBy(items, item => item.getDate().replace(/ /g,''));

    const ordered = {};
    //zoradi podla datumu a vystrihne len prve 3 najblizsie datumy .slice(0,3)

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

const NextMeetingList = ({ items, onItemPress }) => {
    const sections = makeSections(items);
    return (
        <SectionList
            renderItem={({ item, index }) => {
                return (
                    <NextMeetingListItem
                        item={item}
                        onPress={onItemPress}
                        index={index}
                    />
                )
            }}
            renderSectionHeader={({section}) => {
                return (
                    <Card>
                        <CardItem style={{ backgroundColor: '#e74c3c'}}>
                            <Text style={{ color: 'white'}}>{section.key}</Text>
                        </CardItem>
                    </Card>
                )
            }}
            sections={sections}
            keyExtractor={(item, index) => index}
        >
        </SectionList>
    )
};

export default NextMeetingList;