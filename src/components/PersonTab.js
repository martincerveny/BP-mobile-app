import React, {Component} from 'react';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Item, Thumbnail, Body } from 'native-base';
import {StyleSheet} from "react-native";

export default class PersonTab extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../images/person-flat.png')} />
                            <Body>
                        <Text>Jan Novotný</Text>
                        <Text note>44 rokov</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered>
                        <Text>INFORMÁCIE</Text>
                    </Separator>
                    <ListItem >
                        <Left>
                            <Icon active name="home" style={{ fontSize: 20}}/>
                            <Text>Bydlisko</Text>
                        </Left>
                        <Right>
                            <Text>Brno</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon active name="briefcase" style={{ fontSize: 20}}/>
                            <Text>Firma</Text>
                        </Left>
                        <Right>
                            <Text>123 s.r.o.</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});