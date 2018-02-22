import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <Form>
                        <View style={ styles.searchBox}>
                            <Item rounded style={{ width: 200}}>
                                <Input placeholder="Zadajte meno" />
                            </Item>
                        </View>
                        <View style={ styles.buttonContainer }>
                            <Button iconLeft danger onPress={() => {this.props.navigation.navigate('SearchResults')}}>
                                <Icon name='search' />
                                <Text>Vyhľadať</Text>
                            </Button>
                            <Button iconLeft danger onPress={() => {this.props.navigation.navigate('CreatePerson')}}>
                                <Icon name='search' />
                                <Text>Vytvoriť </Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    }
});