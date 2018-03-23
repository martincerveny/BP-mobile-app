import React from 'react';
import { ListView  } from 'react-native';
import NoteListItem from './../NoteListItem/NoteListItem';

import styles from './styles';

const NoteList = ({ items, meetingId, userId, onDeleteItemPress }) => (
    <ListView
        enableEmptySections
        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(items)}
        renderRow={item => (
            <NoteListItem
                item={item}
                meetingId={meetingId}
                userId={userId}
                deleteItemPress={onDeleteItemPress}
            />
        )}
    />
);

export default NoteList;