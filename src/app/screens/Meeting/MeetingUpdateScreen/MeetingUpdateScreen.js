import React from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import Header from '../../../components/Header/Header'
import { deleteMeetingItem } from './../../../flux/Meeting/MeetingActions'

import styles from './styles';

class MeetingUpdateScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: ''
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    };

    componentDidMount () {
        this.loadItem();
    };

    loadItem () {
        const meetingId = this.props.navigation.state.params.meetingId;

        MeetingStore.getItemById(meetingId).then(meetingItem => {
            return this.setState({ meetingItem })
        });

    };

    goBack () {
        this.props.navigation.goBack()
    }

    handleDeleteItem () {
        deleteMeetingItem(this.state.meetingItem);
        this.props.navigation.navigate("meeting.list")
    }

    render () {
        const { meetingItem } = this.state;

        return (
            <Container>
                <Header
                    title={meetingItem.name}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />

                <Button danger onPress={this.handleDeleteItem}>
                    <Text>Zmazať</Text>
                </Button>
            </Container>
        );
    }
}

export default MeetingUpdateScreen;