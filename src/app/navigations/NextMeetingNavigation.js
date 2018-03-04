import React from 'react';
import {StackNavigator} from "react-navigation";
import NextMeetingListScreen from "../screens/Meeting/NextMeeting/NextMeetingListScreen/NextMeetingListScreen";
import NextMeetingDetailScreen from "../screens/Meeting/NextMeeting/NextMeetingDetailScreen/NextMeetingDetailScreen";

const NextMeetingNavigation = StackNavigator({
    'meeting.nextMeeting.list': {
        screen: NextMeetingListScreen,
        navigationOptions: {
            headerTitle: 'Najbližšie schôdzky',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    'meeting.nextMeeting.detail': {
        screen: NextMeetingDetailScreen,
        navigationOptions: {
            headerTitle: 'Úvodná schôdzka',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        }
    },
});

export default NextMeetingNavigation;