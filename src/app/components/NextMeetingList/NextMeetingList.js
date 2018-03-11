import React from 'react';
import { ListView  } from 'react-native';
import NextMeetingListItem from './../NextMeetingListItem/NextMeetingListItem';

import styles from './styles';

const NextMeetingList = ({ items, onItemPress }) => (
    <ListView
        enableEmptySections
        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(items)}
        renderRow={item => (
            <NextMeetingListItem
                item={item}
                onPress={onItemPress}
            />
        )}
    />
);

export default NextMeetingList;