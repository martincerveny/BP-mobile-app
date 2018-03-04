import React, { Component } from 'react';
import { Container, Badge, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles';

class NextMeetingCard extends Component {
    render() {
        return (
                    <Card>
                        <CardItem >
                            <Left>
                                <Icon active name="flame" style={{ color: '#e74c3c'}}/>
                                <Body>
                                    <Text>Úvodná schôdzka</Text>
                                    <Text note>14.3.2018</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{ marginLeft: 25}}>
                            <Left>
                                <Icon style={{ fontSize: 20}} active name="time" />
                                <Text>14:30</Text>

                            </Left>
                            <Left>
                                <Icon style={{ fontSize: 20}} active name="navigate" />
                                <Text>Brno</Text>

                            </Left>
                            <Left>
                                <Icon style={{ fontSize: 20}}  active name="people" />
                                <Text>7</Text>
                            </Left>
                        </CardItem>
                    </Card>
        );
    }
}

export default NextMeetingCard;