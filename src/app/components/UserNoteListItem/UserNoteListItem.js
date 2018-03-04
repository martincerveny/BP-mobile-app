import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Input, Badge, Right, Button, Icon, Separator } from 'native-base';
import styles from './styles';

class UserNoteListItem extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Body>
                                <Text>A-zet</Text>
                            </Body>
                            <Right>
                                <Text style={{ paddingLeft: 10}} note>20.2.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                                <Input style={{ marginTop: 5}} value="Poznámka 1"/>
                            </Body>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                                <Input style={{ marginTop: 5}} value="Poznámka 2"/>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Body>
                                <Text>Brnenská schôdzka</Text>
                            </Body>
                            <Right>
                                <Text style={{ paddingLeft: 10}} note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                                <Input style={{ marginTop: 5}} value="Poznámka 1"/>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Body>
                                <Text>Bratislavské stretnutie</Text>
                            </Body>
                            <Right>
                                <Text style={{ paddingLeft: 10}} note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                                <Input style={{ marginTop: 5}} value="Poznámka 1"/>
                            </Body>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                                <Input style={{ marginTop: 5}} value="Poznámka 2"/>
                            </Body>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                                <Input style={{ marginTop: 5}} value="Poznámka 3"/>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default UserNoteListItem;