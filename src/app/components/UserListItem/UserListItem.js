import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Input, Button, Icon } from 'native-base';
import {StyleSheet} from "react-native";
import styles from './styles';

class UserListItem extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <Button style={{ marginLeft: 145, marginTop: 10, marginBottom: 10 }} iconLeft danger onPress={() => {this.props.navigation.navigate('user.search.index')}}>
                        <Icon name='add' />
                        <Text>Pridať</Text>
                    </Button>
                    <List>
                        <ListItem style={ styles.listItem } onPress={() => this.props.navigation.navigate("user.detail")}>
                            <Thumbnail square size={80} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Jan Novotný</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Peter Green</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Martin Red</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Jakub Brown</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../resources/images/person-flat.png')} />
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

export default UserListItem;