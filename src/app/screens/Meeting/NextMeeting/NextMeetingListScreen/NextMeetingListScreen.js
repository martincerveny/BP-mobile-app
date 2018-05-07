import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import {Container, Text} from 'native-base';
import Header from '../../../../components/Header/Header'
import styles from './styles';
import MeetingStore from "../../../../flux/Meeting/MeetingStore";
import NextMeetingList from '../../../../components/NextMeetingList/NextMeetingList';

// obrazovka zobrazujuca zoznam najblizsich schodzok
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
        MeetingStore.addChangeListener(this.loadItems);
        this.loadItems();
    };

    componentWillUnmount () {
        MeetingStore.removeChangeListener(this.loadItems);
    }

    // nacitanie schodzok podla datumu
    loadItems () {
        MeetingStore.getAllItems().then(items => {
            let meetingItemsArray = [];

            for(let i =0; i<items.length; i++) {
                //vyparsujeme den, mesiac, rok
                date1 = items[i].getDate().split(".");
                if(date1[0]<10){date1[0]='0'+date1[0]}
                if(date1[1]<10){date1[1]='0'+date1[1]}

                // porovnanie datumu schodzky s dnesnym datumom, vynulovanie casu - pre porovnanie bez casu
                let meetingDate = new Date(date1[2], date1[1] - 1, date1[0]);
                meetingDate.setHours(0,0,0,0);

                let todayDate = new Date();
                todayDate.setHours(0,0,0,0);

                if (todayDate <= meetingDate) {
                    meetingItemsArray.push(items[i]);
                }
            }

            return this.setState({ items: meetingItemsArray })
        });
    }

    handleItemPress (id) {
        this.props.navigation.navigate("meeting.nextMeeting.detail", { meetingId: id})
    }

    render () {
        const { items } = this.state;
        return (
            <Container style={ styles.container }>
                <Header
                    title='Najbližšie schôdzky'
                    bodyFlex={4}
                />
                <ScrollView>
                    {
                        items.length > 0
                            ? (<NextMeetingList
                                items={items}
                                onItemPress={this.handleItemPress}
                            />)
                            : (<Text style={ styles.noResultsText}>Žiadne schôdzky</Text>)
                    }
                </ScrollView>
            </Container>
        )
    }
}

export default NextMeetingListScreen;