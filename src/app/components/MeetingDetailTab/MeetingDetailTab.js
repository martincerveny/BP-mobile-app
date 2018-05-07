import React from 'react';
import { Icon, Text, Left, Separator, ListItem, Right, Content, Container } from 'native-base';

import styles from './styles';

// komponenta TABU zobrazujuceho detail schodzky
const MeetingDetailTab = ({ meetingItem, peopleCount }) => (
    <Container>
        <Content>
            <Separator bordered>
                <Text>INFORMÁCIE</Text>
            </Separator>
            <ListItem>
                <Left>
                    <Icon active name="ios-calendar-outline" style={ styles.icon }/>
                    <Text>Dátum</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{meetingItem && meetingItem.getDate()}</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon active name="ios-time-outline" style={ styles.icon }/>
                    <Text>Čas</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{meetingItem && meetingItem.getTime()}</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon active name="ios-pin-outline" style={ styles.icon }/>
                    <Text>Miesto</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{meetingItem && meetingItem.getPlace()}</Text>
                </Right>
            </ListItem>
            <ListItem last>
                <Left>
                    <Icon active name="ios-people-outline" style={ styles.icon }/>
                    <Text>Počet ľudí</Text>
                </Left>
                <Right style={ styles.listItemRight }>
                    <Text>{peopleCount}</Text>
                </Right>
            </ListItem>
            <Separator bordered>
                <Text>POZNÁMKA</Text>
            </Separator>
            <Text style={ styles.noteTextStyle }>{meetingItem && meetingItem.getNote()}</Text>
        </Content>
    </Container>
);

export default MeetingDetailTab;