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
    firstName: 'Vanes',
    lastName: 'Béresová',
    age: 20,
    address: 'Košice',
    company: '123 s.r.o.',
    note: 'Text poznamky',
};

let user2 = {
    id: 2,
    meetingIds: ['@MeetingStore:meeting:id:1'],
    firstName: 'Lukáš',
    lastName: 'Pokorný',
    age: 30,
    address: 'Brno',
    company: 'New company',
    note: 'Text poznamky',
};

let user3 = {
    id: 3,
    meetingIds: ['@MeetingStore:meeting:id:2','@MeetingStore:meeting:id:3'],
    firstName: 'Tibor',
    lastName: 'Kováč',
    age: 42,
    address: 'Bratislava',
    company: 'Red Devil s.r.o.',
    note: 'Text poznamky',
};

let user4 = {
    id: 4,
    meetingIds: ['@MeetingStore:meeting:id:3'],
    firstName: 'Tomáš',
    lastName: 'Kríž',
    age: 35,
    address: 'Trenčín',
    company: 'SK stav s.r.o',
    note: 'Text poznamky',
};

let user5 = {
    id: 5,
    meetingIds: ['@MeetingStore:meeting:id:2'],
    firstName: 'Jozef',
    lastName: 'Drahovský',
    age: 40,
    address: 'Košice',
    company: 'Lucky s.r.o.',
    note: 'Text poznamky',
};

let user6 = {
    id: 6,
    meetingIds: ['@MeetingStore:meeting:id:3'],
    firstName: 'Veronika',
    lastName: 'Dobrá',
    age: 25,
    address: 'Banská Bystrica',
    company: 'King s.r.o.',
    note: 'Text poznamky',
};

let note1 = {
    id: 1,
    meetingId: 'a6a112da-028f-1308-86c7-67b7fc8d659a',
    userId: '64bc3f6f-2695-5140-e913-7cc67ffc344a',
    text: 'Test poznamky'
}

let note2 = {
    id: 2,
    meetingId: 'a6a112da-028f-1308-86c7-67b7fc8d659a',
    userId: '64bc3f6f-2695-5140-e913-7cc67ffc344a',
    text: 'Toto je dalsia testovacia poznamka'
}

let note3 = {
    id: 3,
    meetingId: 'a6a112da-028f-1308-86c7-67b7fc8d659a',
    userId: '881bd389-88cc-1168-3482-327359ef761c',
    text: 'Text'
}

let note4 = {
    id: 4,
    meetingId: '61a8d918-bab9-9130-c483-f4991c89bf10',
    userId: '30c6cd62-f3a4-d34f-ee3d-2073b7a25371',
    text: 'Test'
}

const Seeds = {
    seed () {
        AsyncStorage.setItem('@NoteStore:note:id:1', JSON.stringify(note1));
        AsyncStorage.setItem('@NoteStore:note:id:2', JSON.stringify(note2));
        AsyncStorage.setItem('@NoteStore:note:id:3', JSON.stringify(note3));
        AsyncStorage.setItem('@NoteStore:note:id:4', JSON.stringify(note4));

        // AsyncStorage.setItem('@MeetingStore:meeting:id:1', JSON.stringify(meeting1));
        // AsyncStorage.setItem('@MeetingStore:meeting:id:2', JSON.stringify(meeting2));
        // AsyncStorage.setItem('@MeetingStore:meeting:id:3', JSON.stringify(meeting3));
        //
        // AsyncStorage.setItem('@UserStore:user:id:1', JSON.stringify(user1));
        // AsyncStorage.setItem('@UserStore:user:id:2', JSON.stringify(user2));
        // AsyncStorage.setItem('@UserStore:user:id:3', JSON.stringify(user3));
        // AsyncStorage.setItem('@UserStore:user:id:4', JSON.stringify(user4));
        // AsyncStorage.setItem('@UserStore:user:id:5', JSON.stringify(user5));
        // AsyncStorage.setItem('@UserStore:user:id:6', JSON.stringify(user6));
    }
} ;

export default Seeds;