import React from 'react';
import { AsyncStorage } from 'react-native';

let meeting1 = {
    id: 1,
    name: 'Úvodná schôdzka',
    date: '14.3.2018',
    time: '14:30',
    place: 'Brno',
    peopleCount: 7,
    note: 'Text poznamky'
};

let meeting2 = {
    id: 2,
    name: 'Druha schôdzka',
    date: '20.3.2018',
    time: '17:30',
    place: 'Bratislava',
    peopleCount: 4,
    note: 'Text poznamky 2'
};

let meeting3 = {
    id: 3,
    name: 'Tretia schôdzka',
    date: '22.3.2018',
    time: '11:30',
    place: 'Bratislava',
    peopleCount: 5,
    note: 'Text poznamky 3'
};



const Seeds = {
    seed () {
        AsyncStorage.setItem('@MeetingStore:meeting:id:1', JSON.stringify(meeting1));
        AsyncStorage.setItem('@MeetingStore:meeting:id:2', JSON.stringify(meeting2));
        AsyncStorage.setItem('@MeetingStore:meeting:id:3', JSON.stringify(meeting3));
    }
}

export default Seeds;