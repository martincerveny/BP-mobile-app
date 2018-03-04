import React from 'react';
import {StackNavigator} from "react-navigation";
import UserListScreen from "../screens/User/UserListScreen/UserListScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";

const UserNavigation = StackNavigator({
    'user.list': {screen: UserListScreen },
    'user.detail': {screen: UserDetailScreen},
});

export default UserNavigation;