import React from 'react';
import { Text, Body, Card, CardItem, Icon, Left } from 'native-base';
import {TouchableOpacity, View} from 'react-native';
import MeetingConstants from "../../flux/Meeting/MeetingConstants";
import UserStore from "../../flux/User/UserStore";
import styles from './styles';

// objekt najblizsej schodzky zo zoznamu
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

    //nacitanie uzivatelov
    loadUserItems () {
        const meetingId = this.props.item.getId();
        UserStore.getAllItemsByMeetingId(MeetingConstants.STORE_KEY_ITEM + meetingId).then(userItems => {
            this.setState({ userItems })
        });
    }

    render () {
        const { userItems } = this.state;

        return(
                <TouchableOpacity button activeOpacity={0.5} onPress={() => this.props.onPress(this.props.item.getId())}>
                    <Card>
                        <CardItem >
                            <Left>
                                <Body>
                                    <Text style={ styles.name }>{this.props.item.getName()}</Text>
                                    <Text note>{this.props.item.getDate()}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={ styles.cardItem}>
                            <View>
                                <Left>
                                    <Icon active name="ios-time-outline" style={ styles.icon }/>
                                    <Text>{this.props.item.getTime()}</Text>

                                </Left>
                            </View>
                            <View>
                                <Left>
                                    <Icon style={ styles.icon } active name="ios-pin-outline" />
                                    <Text>{this.props.item.getPlace()}</Text>
                                </Left>
                            </View>
                            <View>
                                <Left>
                                    <Icon style={ styles.icon }  active name="ios-people-outline" />
                                    <Text>{userItems.length}</Text>
                                </Left>
                            </View>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
        );
    }
}

export default NextMeetingListItem;