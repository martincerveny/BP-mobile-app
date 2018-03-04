import React, {Component} from 'react';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Item } from 'native-base';
import styles from './styles';

class MeetingItem extends Component {
    render() {
        return (
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
                            <Text>14.3.2018</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon active name="time" style={{ fontSize: 20}}/>
                            <Text>Čas</Text>
                        </Left>
                        <Right>
                            <Text>14:30</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon active name="navigate" style={{ fontSize: 20}}/>
                            <Text>Miesto</Text>
                        </Left>
                        <Right>
                            <Text>Brno</Text>
                        </Right>
                    </ListItem>
                    <ListItem last>
                        <Left>
                            <Icon active name="people" style={{ fontSize: 20}}/>
                            <Text>Počet ľudí</Text>
                        </Left>
                        <Right>
                            <Text>7</Text>
                        </Right>
                    </ListItem>
                    <Separator bordered>
                        <Text>POZNÁMKA</Text>
                    </Separator>
                    <Text style={{ paddingLeft: 15, paddingTop: 10}}>Text poznámky</Text>
                </Content>
            </Container>
        );
    }
}

export default MeetingItem;