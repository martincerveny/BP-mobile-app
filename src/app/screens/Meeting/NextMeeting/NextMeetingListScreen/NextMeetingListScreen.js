import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import { Container } from 'native-base';
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
        MeetingStore.addChangeListener(this.loadItems);
        this.loadItems();
    };

    componentWillUnmount () {
        MeetingStore.removeChangeListener(this.loadItems);
    }

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
                    title='Ďalšie schôdzky'
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