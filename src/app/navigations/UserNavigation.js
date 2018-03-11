import React from 'react';
import {StackNavigator} from "react-navigation";
import UserListScreen from "../screens/User/UserListScreen/UserListScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";
import MeetingDetailScreen from "../screens/Meeting/MeetingDetailScreen/MeetingDetailScreen";

const config = {
    headerMode: 'none',
};

const UserNavigation = StackNavigator({
    'user.list': {screen: UserListScreen },
    'user.detail': {screen: UserDetailScreen},

    //meeting
    'meeting.detail': { screen: MeetingDetailScreen },
}, config);

export default UserNavigation;