import React from 'react';
import { ListView  } from 'react-native';
import UserListItem from './../UserListItem/UserListItem';

import styles from './styles';

const UserList = ({ items, onItemPress }) => (
    <ListView
        enableEmptySections
        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(items)}
        renderRow={item => (
            <UserListItem
                item={item}
                onPress={onItemPress}
            />
        )}
    />
)

export default UserList;