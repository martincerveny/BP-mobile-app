import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Badge } from 'native-base';
import {StyleSheet} from "react-native";
import styles from './styles';

class MeetingListScreen extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>A</Text>
                        </ListItem>
                        <ListItem button style={ styles.listItem }>
                            <Body>
                                <Text>A-zet</Text>
                            </Body>
                            <Right>
                                <Text note>20.2.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>B</Text>
                        </ListItem>
                        <ListItem button style={ styles.listItem }>
                            <Body>
                                <Text>Brnenská schôdzka</Text>
                            </Body>
                            <Right>
                                <Text note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem button style={ styles.listItem }>
                            <Body>
                                <Text>Bratislavské stretnutie</Text>
                            </Body>
                            <Right>
                                <Text note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>U</Text>
                        </ListItem>
                        <ListItem button  onPress={() => this.props.navigation.navigate("meeting.detail")} style={ styles.listItem }>
                                <Body>
                                    <Text>Úvodná schôdzka</Text>
                                </Body>
                            <Right>
                                <Text note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem button  onPress={() => this.props.navigation.navigate("meeting.detail")} style={ styles.listItem }>
                            <Body>
                                <Text>Úvodná schôdzka</Text>
                            </Body>
                            <Right>
                                <Text note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>Z</Text>
                        </ListItem>
                        <ListItem button style={ styles.listItem }>
                            <Body>
                                <Text>Záverečné stretnutie</Text>
                            </Body>
                            <Right>
                                <Text note>14.3.2018</Text>
                            </Right>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        );
    }
}

export default MeetingListScreen;