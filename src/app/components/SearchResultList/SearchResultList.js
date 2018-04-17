import React from 'react';
import { ListView } from 'react-native';
import SearchResultListItem from './../SearchResultListItem/SearchResultListItem';

import styles from './styles';

const SearchResultList = ({ items, createItemOnPress, onItemPress }) => (
    <ListView
        enableEmptySections
        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(items)}
        renderRow={item => (
            <SearchResultListItem
                item={item}
                onPress={onItemPress}
                createOnPress={createItemOnPress}
            />
        )}
    />
);

export default SearchResultList;