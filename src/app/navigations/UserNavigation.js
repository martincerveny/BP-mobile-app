import React from 'react';
import {StackNavigator} from "react-navigation";
import UserListScreen from "../screens/User/UserListScreen/UserListScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";
import MeetingDetailScreen from "../screens/Meeting/MeetingDetailScreen/MeetingDetailScreen";
import UserSearchIndexScreen from "../screens/User/Search/UserSearchIndexScreen/UserSearchIndexScreen";

const config = {
    headerMode: 'none',
};

// navigacia uzivatelov
const UserNavigation = StackNavigator({
    'user.list': {screen: UserListScreen },
    'user.detail': {screen: UserDetailScreen},
    'user.search.index': { screen: UserSearchIndexScreen },

    //meeting
    'meeting.detail': { screen: MeetingDetailScreen },

}, config);

export default UserNavigation;