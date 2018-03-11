import React, {Component} from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Card, CardItem } from 'native-base';
import Header from '../../../../components/Header/Header'
import styles from './styles';
import MeetingStore from "../../../../flux/Meeting/MeetingStore";
import NextMeetingList from '../../../../components/NextMeetingList/NextMeetingList';

class NextMeetingListScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: []
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    }

    componentDidMount () {
        this.loadItems();
    };

    loadItems () {
        MeetingStore.getAllItems().then(items => {
            return this.setState({ items })
        });
    }

    handleItemPress (id) {
        this.props.navigation.navigate("meeting.nextMeeting.detail", { meetingId: id})
    }

    render () {
        const { items } = this.state;

        return (
            <Container>
                <Header
                    title='Nasledujúce schôdzky'
                />
                <View style={ styles.container }>
                    <ScrollView>
                        <NextMeetingList
                            items={items}
                            onItemPress={this.handleItemPress}
                        />
                    </ScrollView>
                </View>
            </Container>
        )
    }
}

export default NextMeetingListScreen;