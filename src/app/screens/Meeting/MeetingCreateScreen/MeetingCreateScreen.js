import React from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Icon, Left, ListItem, List, Right, Input, Body, Label, Button, Picker} from 'native-base';
import styles from './styles';
import Header from '../../../components/Header/Header'


class MeetingCreateScreen extends React.Component {
    constructor (props) {
        super(props);

        this.goBack = this.goBack.bind(this)
    };

    goBack () {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <Container style={ styles.container}>
                <Header
                    title='Vytvoriť schôdzku'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
                <Content>
                    <ListItem last>
                        <Label >Názov:</Label>
                            <Body>
                            <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Dátum:</Label>
                            <Body>
                            <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Čas:</Label>
                        <Body>
                        <Input style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Miesto:</Label>
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

export default MeetingCreateScreen;