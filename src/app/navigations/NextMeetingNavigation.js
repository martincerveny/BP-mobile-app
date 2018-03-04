import React from 'react';
import {StackNavigator} from "react-navigation";
import NextMeetingListScreen from "../screens/Meeting/NextMeeting/NextMeetingListScreen/NextMeetingListScreen";
import NextMeetingDetailScreen from "../screens/Meeting/NextMeeting/NextMeetingDetailScreen/NextMeetingDetailScreen";

const NextMeetingNavigation = StackNavigator({
    'meeting.nextMeeting.list': { screen: NextMeetingListScreen },
    'meeting.nextMeeting.detail': {screen: NextMeetingDetailScreen},
});

export default NextMeetingNavigation;