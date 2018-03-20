import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Body, Label, Button, Picker} from 'native-base';
import Header from '../../../components/Header/Header'

import styles from './styles';

class UserCreateScreen extends Component {
    constructor (props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    goBack () {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <Container style={ styles.container}>
                <Header
                    title='Vytvoriť osobu'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
                <Content>
                    <Separator bordered>
                        <Text>ZÁKLADNÉ INFORMÁCIE</Text>
                    </Separator>
                    <ListItem last>
                        <Label >Meno:</Label>
                        <Body>
                        <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Priezvisko:</Label>
                        <Body>
                        <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Vek:</Label>
                        <Body>
                        <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <Separator bordered>
                        <Text>ROZŠÍRENÉ INFORMÁCIE</Text>
                    </Separator>
                    <ListItem last>
                        <Label >Bydlisko:</Label>
                        <Body>
                        <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Firma:</Label>
                        <Body>
                        <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <View style={ styles.buttonContainer }>
                        <Button  danger >
                            <Text>Uložiť </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default UserCreateScreen;