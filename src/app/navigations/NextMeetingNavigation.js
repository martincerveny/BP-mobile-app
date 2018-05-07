import React from 'react';
import {StackNavigator} from "react-navigation";
import NextMeetingListScreen from "../screens/Meeting/NextMeeting/NextMeetingListScreen/NextMeetingListScreen";
import NextMeetingDetailScreen from "../screens/Meeting/NextMeeting/NextMeetingDetailScreen/NextMeetingDetailScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";
import UserSearchResultScreen from "../screens/User/Search/UserSearchResultScreen/UserSearchResultScreen";
import UserAddListScreen from "../screens/User/UserAddFromListScreen/UserAddFromListScreen";
import UserSearchIndexScreen from "../screens/User/Search/UserSearchIndexScreen/UserSearchIndexScreen";
import UserCreateScreen from "../screens/User/UserCreateScreen/UserCreateScreen";
import UserListScreen from "../screens/User/UserListScreen/UserListScreen";

const config = {
    headerMode: 'none',
};

//navigacia najblizsich schodzok
const NextMeetingNavigation = StackNavigator({
    'meeting.nextMeeting.list': { screen: NextMeetingListScreen },
    'meeting.nextMeeting.detail': {screen: NextMeetingDetailScreen},

    //user
    'user.detail': { screen: UserDetailScreen },
    'user.search.index': { screen: UserSearchIndexScreen },
    'user.create': { screen: UserCreateScreen },
    'user.list': {screen: UserListScreen },
    'user.search.result': { screen: UserSearchResultScreen },
    'user.addlist': {screen: UserAddListScreen}
}, config);

export default NextMeetingNavigation;