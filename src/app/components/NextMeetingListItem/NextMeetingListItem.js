import React from 'react';
import { Content, List, ListItem, Thumbnail, Text, Body, Input, Right, Card, CardItem, Icon, Left } from 'native-base';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';

const NextMeetingListItem = ({ item, onPress }) => (
    <Content>
        <Card>
            <CardItem style={{ backgroundColor: '#e74c3c'}}>
                <Text style={{ color: 'white'}}>{item.getDate()}</Text>
            </CardItem>
        </Card>
        <TouchableOpacity button activeOpacity={0.5} onPress={() => onPress(item.getId())}>
            <Card>
                <CardItem >
                    <Left>
                        <Body>
                        <Text>{item.getName()}</Text>
                        <Text note>{item.getDate()}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                    <View>
                        <Left>
                            <Icon active name="ios-time-outline" style={{ fontSize: 30, color: '#e74c3c'}}/>
                            <Text>{item.getTime()}</Text>

                        </Left>
                    </View>
                    <View>
                        <Left>
                            <Icon style={{ fontSize: 30, color: '#e74c3c'}} active name="ios-pin-outline" />
                            <Text>{item.getPlace()}</Text>
                        </Left>
                    </View>
                    <View>
                        <Left>
                            <Icon style={{ fontSize: 30, color: '#e74c3c'}}  active name="ios-people-outline" />
                            <Text></Text>
                        </Left>
                    </View>
                </CardItem>
            </Card>
        </TouchableOpacity>
    </Content>
);

export default NextMeetingListItem;