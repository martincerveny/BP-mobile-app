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

let user1 = {
    id: 1,
    meetingIds: ['@MeetingStore:meeting:id:1','@MeetingStore:meeting:id:2'],
    name: 'Vanes Béresová',
    age: 20,
    address: 'Košice',
    company: '123 s.r.o.',
    note: 'Text poznamky',
};

let user2 = {
    id: 2,
    meetingIds: ['@MeetingStore:meeting:id:1'],
    name: 'Lukáš Pokorný',
    age: 30,
    address: 'Brno',
    company: 'New company',
    note: 'Text poznamky',
};

let user3 = {
    id: 3,
    meetingIds: ['@MeetingStore:meeting:id:2','@MeetingStore:meeting:id:3'],
    name: 'Tibor Kováč',
    age: 42,
    address: 'Bratislava',
    company: 'Red Devil s.r.o.',
    note: 'Text poznamky',
};

let user4 = {
    id: 4,
    meetingIds: ['@MeetingStore:meeting:id:3'],
    name: 'Tomáš Kríž',
    age: 35,
    address: 'Trenčín',
    company: 'SK stav s.r.o',
    note: 'Text poznamky',
};

let user5 = {
    id: 5,
    meetingIds: ['@MeetingStore:meeting:id:2'],
    name: 'Jozef Drahovský',
    age: 40,
    address: 'Košice',
    company: 'Lucky s.r.o.',
    note: 'Text poznamky',
};

let user6 = {
    id: 6,
    meetingIds: ['@MeetingStore:meeting:id:3'],
    name: 'Veronika Dobrá',
    age: 25,
    address: 'Banská Bystrica',
    company: 'King s.r.o.',
    note: 'Text poznamky',
};

const Seeds = {
    seed () {

        AsyncStorage.setItem('@MeetingStore:meeting:id:1', JSON.stringify(meeting1));
        AsyncStorage.setItem('@MeetingStore:meeting:id:2', JSON.stringify(meeting2));
        AsyncStorage.setItem('@MeetingStore:meeting:id:3', JSON.stringify(meeting3));

        AsyncStorage.setItem('@UserStore:user:id:1', JSON.stringify(user1));
        AsyncStorage.setItem('@UserStore:user:id:2', JSON.stringify(user2));
        AsyncStorage.setItem('@UserStore:user:id:3', JSON.stringify(user3));
        AsyncStorage.setItem('@UserStore:user:id:4', JSON.stringify(user4));
        AsyncStorage.setItem('@UserStore:user:id:5', JSON.stringify(user5));
        AsyncStorage.setItem('@UserStore:user:id:6', JSON.stringify(user6));
    }
} ;

export default Seeds;