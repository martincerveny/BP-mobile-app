import React from 'react';
import {TabNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/Feather';
import NextMeetingNavigation from './NextMeetingNavigation';
import UserNavigation from './UserNavigation';
import MeetingNavigation from './MeetingNavigation';

const config = {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#e74c3c',
        showLabel: true
    },
};

// zakladna navigacia aplikacie
const AppNavigation = TabNavigator({
        'Najbližšie schôdzky': {
            screen: NextMeetingNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'home'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },

        'Schôdzky': {
            screen: MeetingNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'list'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        'Ľudia': {
            screen: UserNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'users'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
    }, config
);

export default AppNavigation;