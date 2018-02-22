import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Input, Left, Button, Icon } from 'native-base';
import { StyleSheet, TouchableHighlight, Modal, ScrollView } from "react-native";

export default class SearchResults extends Component {
    render() {
        return (
            <Container style={ styles.container } >
                <Content>
                    <List>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Jan Novotný</Text>

                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Peter Green</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Martin Red</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Jakub Brown</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                                <Text>Karlos Black</Text>
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
        flexDirection: 'row',
        marginLeft: -15,
        backgroundColor: 'white',
    },
    modalContainer: {
        flex: 1,
        marginLeft: -15,
        backgroundColor: 'white',
    },
    listItem: {
        paddingLeft: 15,
    }
});