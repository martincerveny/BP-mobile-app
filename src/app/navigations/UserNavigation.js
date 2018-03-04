import React from 'react';
import {StackNavigator} from "react-navigation";
import UserListScreen from "../screens/User/UserListScreen/UserListScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";

const UserNavigation = StackNavigator({
    'user.list': {
        screen: UserListScreen,
        navigationOptions: {
            headerTitle: 'Zoznam ľudí',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    'user.detail': {
        screen: UserDetailScreen,
        navigationOptions: {
            headerTitle: 'Jan Novotný',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
});

export default UserNavigation;