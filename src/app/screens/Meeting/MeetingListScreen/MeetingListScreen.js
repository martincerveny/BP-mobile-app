import React, {Component} from 'react';
import { AsyncStorage, ListView } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Badge } from 'native-base';
import styles from './styles';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import MeetingList from '../../../components/MeetingList/MeetingList';

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

AsyncStorage.setItem('@MeetingStore:meeting:id:1', JSON.stringify(meeting1));
AsyncStorage.setItem('@MeetingStore:meeting:id:2', JSON.stringify(meeting2));

class MeetingListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    }

    componentDidMount() {
        this.loadItems();
    };

    loadItems() {
        MeetingStore.getAllItems().then(items => {
            return this.setState({ items })
        });
    }

    handleItemPress(id) {
        this.props.navigation.navigate("meeting.detail")
    }

    render() {
        const { items } = this.state;

        return (
            <Container style={ styles.container }>
                <Content>
                    <MeetingList
                    items={items}
                    onMeetingItemPress={this.handleItemPress}
                    />
                </Content>
            </Container>
        );
    }
}

MeetingListScreen.navigationOptions = {
    headerTitle: 'Zoznam schôdzok',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default MeetingListScreen;