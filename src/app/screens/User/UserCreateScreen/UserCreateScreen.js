import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Body, Label, Button, Picker} from 'native-base';
import Header from '../../../components/Header/Header'

const Item = Picker.Item;
import styles from './styles';

class UserCreateScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected2: undefined
        };

        this.goBack = this.goBack.bind(this);
    }
    onValueChange2 (value: string) {
        this.setState({
            selected2: value
        });
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
                    <ListItem last>
                        <Label >Schôdzka :</Label>
                        <Body>
                        <Picker
                            mode="dropdown"
                            placeholder="Vybrať"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                            style={{ height: 30}}
                        >
                            <Item label="Úvodná schôdzka" value="key0" />
                            <Item label="Brnenská schôdzka" value="key1" />
                            <Item label="Bratislavské stretnutie" value="key2" />
                            <Item label="Záverečné stretnutie" value="key3" />
                        </Picker>
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