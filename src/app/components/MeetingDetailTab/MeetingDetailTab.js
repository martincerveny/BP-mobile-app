import React from 'react';
import { Icon, Text, Left, Separator, ListItem, Right, Input, Content, Container } from 'native-base';

import styles from './styles';

const MeetingDetailTab = ({ meetingItem }) => (
    <Container>
        <Content>
            <Separator bordered>
                <Text>INFORMÁCIE</Text>
            </Separator>
            <ListItem>
                <Left>
                    <Icon active name="ios-calendar-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 30, marginLeft: 5 }}/>
                    <Text>Dátum</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{meetingItem.date}</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon active name="ios-time-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 30, marginLeft: 5  }}/>
                    <Text>Čas</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text> {meetingItem.time} </Text>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon active name="ios-pin-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 27, marginLeft: 8  }}/>
                    <Text>Miesto</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{meetingItem.place}</Text>
                </Right>
            </ListItem>
            <ListItem last>
                <Left>
                    <Icon active name="ios-people-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 30, marginLeft: 5  }}/>
                    <Text>Počet ľudí</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{meetingItem.peopleCount}</Text>
                </Right>
            </ListItem>
            <Separator bordered>
                <Text>POZNÁMKA</Text>
            </Separator>
            <Text style={{ paddingLeft: 15, paddingTop: 10}}>{meetingItem.note}</Text>
        </Content>
    </Container>
);

export default MeetingDetailTab;