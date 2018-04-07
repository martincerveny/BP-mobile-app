import React from 'react';
import { Content, Text, Body, Card, CardItem, Icon, Left } from 'native-base';
import {TouchableOpacity, View} from 'react-native';
import MeetingConstants from "../../flux/Meeting/MeetingConstants";
import UserStore from "../../flux/User/UserStore";
import styles from './styles';

class NextMeetingListItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userItems: []
        };

        this.loadUserItems = this.loadUserItems.bind(this);
    }

    componentDidMount () {
        UserStore.addChangeListener(this.loadUserItems);
        this.loadUserItems();
    }

    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadUserItems);
    }

    // @TODO ROVNAKY PROBLEM - toto asi potrebuje byt konstanta a nie trieda
    loadUserItems () {
        const meetingId = this.props.item.getId();
        UserStore.getAllItemsByMeetingId(MeetingConstants.STORE_KEY_ITEM + meetingId).then(userItems => {
            this.setState({ userItems })
        });
    }

    render () {
        const { userItems } = this.state;

        return(
            <Content>
                <TouchableOpacity button activeOpacity={0.5} onPress={() => this.props.onPress(this.props.item.getId())}>
                    <Card>
                        <CardItem >
                            <Left>
                                <Body>
                                <Text style={{ fontSize: 17 }}>{this.props.item.getName()}</Text>
                                <Text note>{this.props.item.getDate()}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                            <View>
                                <Left>
                                    <Icon active name="ios-time-outline" style={{ fontSize: 30, color: '#e74c3c'}}/>
                                    <Text>{this.props.item.getTime()}</Text>

                                </Left>
                            </View>
                            <View>
                                <Left>
                                    <Icon style={{ fontSize: 30, color: '#e74c3c'}} active name="ios-pin-outline" />
                                    <Text>{this.props.item.getPlace()}</Text>
                                </Left>
                            </View>
                            <View>
                                <Left>
                                    <Icon style={{ fontSize: 30, color: '#e74c3c'}}  active name="ios-people-outline" />
                                    <Text>{userItems.length}</Text>
                                </Left>
                            </View>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </Content>
        );
    }
}

export default NextMeetingListItem;