import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Badge } from 'native-base';
import {StyleSheet} from "react-native";

export default class PeopleList extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>J</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Jakub Brown</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem } onPress={() => this.props.navigation.navigate("Person")}>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Jan Novotný</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>K</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Karlos Black</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>M</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Martin Red</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>P</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Peter Green</Text>
                            </Body>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: -15,
        backgroundColor: 'white'
    },
    listItem: {
        paddingLeft: 15,
    }
});