import React from 'react';
import { SectionList} from 'react-native';
import NextMeetingListItem from './../NextMeetingListItem/NextMeetingListItem';
import {Card, CardItem, Text} from "native-base";

import styles from './styles';

const makeSections = (items) => {
    console.log(items)
    //zoskupi podla datumu
    const groupedItems = _.groupBy(items, item => item.getDate());

    const ordered = {};

    //vystrihne len prve 3 najblizsie datumy .slice(0,3)
    const orderedKeys = Object.keys(groupedItems);

    //zoradenie podla datumu
    var arr = [];
    for(var i =0; i<orderedKeys.length; i++)
    {
        date1 = orderedKeys[i].split(".");
        if(date1[0]<10){date1[0]='0'+date1[0]}
        if(date1[1]<10){date1[1]='0'+date1[1]}
        arr.push(new Date(date1[2], date1[1] - 1, date1[0]));
    }

    arr.sort(function(a,b){return a-b});  //asc

    // naformatuje naspat date object na localne zobrazenie datumu
    function formatDateArr(arr)
    {
        formatedArr = [];
        for(var i=0; i<arr.length; i++)
        {
            var curr_date = arr[i].getDate();
            var curr_month = arr[i].getMonth() + 1; //Months are zero based

            // ak je datum len jedno cislo, treba doplnit aj 0
            if (arr[i].getDate() < 10) {
                curr_date = '0' + arr[i].getDate();
            }

            if (arr[i].getMonth() < 10) {
                var tmp = arr[i].getMonth() + 1;
                curr_month = '0' + tmp;
            }

            var curr_year = arr[i].getFullYear();
            formatedArr.push(curr_date + "." + curr_month + "." + curr_year);
        }
        return formatedArr;
    }

    // .slice(0,3) - zobrazi len najblizsie 3 datumy
    formatDateArr(arr).slice(0,3).forEach(function (key) {
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