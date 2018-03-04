import React from 'react';
import UserCreateScreen from "../screens/User/UserCreateScreen/UserCreateScreen";
import {StackNavigator} from "react-navigation";
import UserSearchResultsScreen from "../screens/User/Search/UserSearchResultsScreen/UserSearchResultsScreen";
import MeetingListScreen from "../screens/Meeting/MeetingListScreen/MeetingListScreen";
import UserSearchIndexScreen from "../screens/User/Search/UserSearchIndexScreen/UserSearchIndexScreen";
import UserDetailScreen from "../screens/User/UserDetailScreen/UserDetailScreen";
import MeetingDetailScreen from "../screens/Meeting/MeetingDetailScreen/MeetingDetailScreen";

const MeetingNavigation = StackNavigator({
    'meeting.list': {
        screen: MeetingListScreen,
        navigationOptions: {
            headerTitle: 'Zoznam schôdzok',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    'meeting.detail': {
        screen: MeetingDetailScreen,
        navigationOptions: {
            headerTitle: 'Úvodná schôdzka',
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
    'user.search.index': {
        screen: UserSearchIndexScreen,
        navigationOptions:{
            headerTitle: 'Hľadať',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    'user.create': {
        screen: UserCreateScreen,
        navigationOptions: {
            headerTitle: 'Pridať osobu',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    'user.search.results': {
        screen: UserSearchResultsScreen,
        navigationOptions: {
            headerTitle: 'Výsledky hľadania',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
});

export default MeetingNavigation;