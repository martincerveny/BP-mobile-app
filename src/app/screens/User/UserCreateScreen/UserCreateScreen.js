import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Body, Label, Button, Picker} from 'native-base';
const Item = Picker.Item;
import styles from './styles';

class UserCreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container style={ styles.container}>
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

UserCreateScreen.navigationOptions = {
    headerTitle: 'Pridať osobu',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default UserCreateScreen;