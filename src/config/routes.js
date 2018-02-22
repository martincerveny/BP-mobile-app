import React from 'react';
import Find from '../screens/Find';
import Home from '../screens/Home';
import SearchResults from '../screens/SearchResults';
import MeetingList from '../screens/MeetingList';
import Meeting from '../screens/Meeting';
import CreatePerson from "../screens/CreatePerson";
import Person from "../screens/Person";
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import PeopleList from "../screens/PeopleList";

export const PeopleListStack = StackNavigator({
    Favourites: {
        screen: PeopleList,
        navigationOptions: {
            headerTitle: 'Zoznam ľudí',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    Person: {
        screen: Person,
        navigationOptions: {
            headerTitle: 'Jan Novotný',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
});

export const MeetingListStack = StackNavigator({
    MeetingList: {
        screen: MeetingList,
        navigationOptions: {
            headerTitle: 'Zoznam schôdzok',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    Meeting: {
        screen: Meeting,
        navigationOptions: {
            headerTitle: 'Úvodná schôdzka',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    Person: {
        screen: Person,
        navigationOptions: {
            headerTitle: 'Jan Novotný',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    Find: {
        screen: Find,
        navigationOptions:{
            headerTitle: 'Hľadať',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    CreatePerson: {
        screen: CreatePerson,
        navigationOptions: {
            headerTitle: 'Pridať osobu',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    SearchResults: {
        screen: SearchResults,
        navigationOptions: {
            headerTitle: 'Výsledky hľadania',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
});

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Najbližšie schôdzky',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    Meeting: {
        screen: Meeting,
        navigationOptions: {
            headerTitle: 'Úvodná schôdzka',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        }
    },
    Person: {
        screen: Person,
            navigationOptions: {
            headerTitle: 'Jan Novotný',
                headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
            },
    },
    Find: {
        screen: Find,
        navigationOptions: {
            headerTitle: 'Hľadať',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    CreatePerson: {
        screen: CreatePerson,
        navigationOptions: {
            headerTitle: 'Pridať osobu',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
    SearchResults: {
        screen: SearchResults,
        navigationOptions: {
            headerTitle: 'Výsledky hľadania',
            headerStyle: {backgroundColor: '#e74c3c'},
            headerTintColor: 'white',
        },
    },
});

export const HomeTabs = TabNavigator({
    Home: {
        screen: HomeStack,
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

    MeetingList: {
        screen: MeetingListStack,
        navigationOptions: {
            tabBarLabel: 'MeetingList',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={'list'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    PeopleList: {
        screen: PeopleListStack,
        navigationOptions: {
            tabBarLabel: 'Zoznam ľudí',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={'users'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
}, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#e74c3c',
            showLabel: false
        },
    }
);