import React from 'react';
import { Content, List, ListItem, Thumbnail, Text, Body, Input, Right, Card, CardItem, Icon, Left } from 'native-base';
import { TouchableOpacity } from 'react-native';

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
                        <Icon active name="flame" style={{ color: '#e74c3c'}}/>
                        <Body>
                        <Text>{item.getName()}</Text>
                        <Text note>{item.getDate()}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={{ marginLeft: 25}}>
                    <Left>
                        <Icon style={{ fontSize: 20}} active name="time" />
                        <Text>{item.getTime()}</Text>

                    </Left>
                    <Left>
                        <Icon style={{ fontSize: 20}} active name="navigate" />
                        <Text>{item.getPlace()}</Text>

                    </Left>
                    <Left>
                        <Icon style={{ fontSize: 20}}  active name="people" />
                        <Text>{item.getPeopleCount()}</Text>
                    </Left>
                </CardItem>
            </Card>
        </TouchableOpacity>
    </Content>
);

export default NextMeetingListItem;