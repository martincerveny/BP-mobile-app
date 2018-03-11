import React from 'react';
import { Icon, Text, Left, Separator, ListItem, Right, Input, Content, Container } from 'native-base';

import styles from './styles';

const MeetingDetailTab = ({ meetingItem }) => (
    <Container>
        <Content>
            <Separator bordered>
                <Text>INFORMÁCIE</Text>
            </Separator>
            <ListItem >
                <Left>
                    <Icon active name="calendar" style={{ fontSize: 20}}/>
                    <Text>Dátum</Text>
                </Left>
                <Right>
                    <Text>{meetingItem.date}</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon active name="time" style={{ fontSize: 20}}/>
                    <Text>Čas</Text>
                </Left>
                <Right>
                    <Text> {meetingItem.time} </Text>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon active name="navigate" style={{ fontSize: 20}}/>
                    <Text>Miesto</Text>
                </Left>
                <Right>
                    <Text>{meetingItem.place}</Text>
                </Right>
            </ListItem>
            <ListItem last>
                <Left>
                    <Icon active name="people" style={{ fontSize: 20}}/>
                    <Text>Počet ľudí</Text>
                </Left>
                <Right>
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