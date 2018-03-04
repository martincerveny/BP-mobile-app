import React from 'react';
import UserCreateScreen from "../screens/User/UserCreateScreen/UserCreateScreen";
import {StackNavigator} from "react-navigation";
import UserSearchResultsScreen from "../screens/User/Search/UserSearchResultsScreen/UserSearchResultsScreen";
import MeetingListScreen from "../screens/Meeting/MeetingListScreen/MeetingListScreen";
import UserSearchIndexScreen from "../screens/User/Search/UserSearchIndexScreen/UserSearchIndexScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";
import MeetingDetailScreen from "../screens/Meeting/MeetingDetailScreen/MeetingDetailScreen";

const MeetingNavigation = StackNavigator({
    'meeting.list': { screen: MeetingListScreen },
    'meeting.detail': { screen: MeetingDetailScreen },

    //user
    'user.detail': { screen: UserDetailScreen },
    'user.search.index': { screen: UserSearchIndexScreen },
    'user.create': { screen: UserCreateScreen },
    'user.search.results': { screen: UserSearchResultsScreen },
});

export default MeetingNavigation;